// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "ds-test/test.sol";
import "forge-std/Vm.sol";
import {DSTestPlus} from "solmate/test/utils/DSTestPlus.sol";
import "../Govrn.sol";

contract ContractTest is DSTestPlus {
    Govrn govrn;
    Vm public constant vm = Vm(HEVM_ADDRESS);

    function setUp() public {
        govrn = new Govrn(1000);
    }

    function testNewContribution() public {
        address[] memory partners;
        govrn.mint("test", "here", 1, 2, "proof", partners);
        (
            address owner,
            bytes memory name,
            bytes memory details,
            uint256 dateOfSubmission,
            uint256 dateOfEngagement,
            bytes memory proof
        ) = govrn.contributions(0);
        assertTrue(owner == address(this));
        assertTrue(keccak256(name) == keccak256("test"));
        assertTrue(keccak256(details) == keccak256("here"));
        assertTrue(dateOfSubmission == 1);
        assertTrue(dateOfEngagement == 2);
        assertTrue(keccak256(proof) == keccak256("proof"));
    }

    function testNewContributionNoPartners() public {
        bool exists = govrn.partners(0, address(this));
        assertTrue(exists == false);
    }

    function testNewContributionWithPartners() public {
        address[] memory partners = new address[](1);
        partners[0] = address(this);
        govrn.mint("test", "here", 1, 2, "proof", partners);
        bool exists = govrn.partners(0, address(this));
        assertTrue(exists);
    }

    function testBulkMintTwo() public {
        address[] memory partners;
        Govrn.BulkContribution[]
            memory contributions = new Govrn.BulkContribution[](2);
        contributions[0] = Govrn.BulkContribution(
            Govrn.Contribution(address(this), "test3", "here", 1, 2, "proof"),
            partners
        );
        contributions[1] = Govrn.BulkContribution(
            Govrn.Contribution(address(this), "test4", "here", 1, 2, "proof"),
            partners
        );
        govrn.bulkMint(contributions);

        (, bytes memory name, , , , ) = govrn.contributions(0);
        assertTrue(keccak256(name) == keccak256("test3"));
        (, bytes memory name2, , , , ) = govrn.contributions(1);
        assertTrue(keccak256(name2) == keccak256("test4"));
    }
}

contract GovrnAttestTest is DSTestPlus {
    Govrn govrn;
    Vm public constant vm = Vm(HEVM_ADDRESS);

    function mintContribution(
        bytes memory _name,
        bytes memory _details,
        uint256 _dateOfSubmission,
        uint256 _dateOfEngagement,
        bytes memory _proof
    ) public {
        address[] memory partners = new address[](0);
        govrn.mint(
            _name,
            _details,
            _dateOfSubmission,
            _dateOfEngagement,
            _proof,
            partners
        );
    }

    function setUp() public {
        govrn = new Govrn(1000);
        this.mintContribution("test", "here", 1, 2, "proof");
    }

    function testAttest() public {
        // attest
        govrn.attest(0, 1);
        (uint256 contribution, uint8 confidence, ) = govrn.attestations(
            0,
            address(this)
        );
        assertTrue(contribution == 0);
        assertTrue(confidence == 1);
    }

    function testBulkAttest() public {
        // attest
        this.mintContribution("testName", "here4", 5, 6, "proof2");
        Govrn.Attestation[] memory attestations = new Govrn.Attestation[](2);
        attestations[0] = Govrn.Attestation(0, 2, 4);
        attestations[1] = Govrn.Attestation(1, 3, 5);

        govrn.bulkAttest(attestations);
        (uint256 contribution, uint8 confidence, ) = govrn.attestations(
            0,
            address(this)
        );

        assertTrue(contribution == 0);
        assertTrue(confidence == 2);
        (uint256 contributionTwo, uint8 confidenceTwo, ) = govrn.attestations(
            1,
            address(this)
        );

        assertTrue(contributionTwo == 1);
        assertTrue(confidenceTwo == 3);
    }

    // TODO: Add deadline test, bad nonce, bad signature
    function testPermitAttest() public {
        uint256 privateKey = 0xBEEF;
        address owner = hevm.addr(privateKey);
        // mint
        address[] memory partners = new address[](0);
        govrn.mint("test", "here", 1, 2, "proof", partners);

        (uint8 v, bytes32 r, bytes32 s) = hevm.sign(
            privateKey,
            keccak256(
                abi.encodePacked(
                    "\x19\x01",
                    govrn.DOMAIN_SEPARATOR(),
                    keccak256(
                        abi.encode(
                            keccak256(
                                "Attest(address attestor,uint256 contribution,uint8 confidence,uint256 dateOfSubmission,uint256 nonce,uint256 deadline)"
                            ),
                            owner,
                            0,
                            1,
                            100,
                            0,
                            block.timestamp
                        )
                    )
                )
            )
        );

        govrn.permitAttest(owner, 0, 1, 100, block.timestamp, v, r, s);
        (
            uint256 contribution,
            uint8 confidence,
            uint256 dateOfSubmission
        ) = govrn.attestations(0, owner);
        assertTrue(contribution == 0);
        assertTrue(confidence == 1);
        assertTrue(dateOfSubmission == 100);
    }
}

contract GovrnRevokeTest is DSTestPlus {
    Govrn govrn;
    Vm public constant vm = Vm(HEVM_ADDRESS);

    function setUp() public {
        govrn = new Govrn(1000);
        address[] memory partners = new address[](0);
        govrn.mint("test", "here", 1, 2, "proof", partners);
    }

    function testRevokeAttestation() public {
        // mint
        vm.warp(100);

        // attest
        govrn.attest(0, 1);
        bool revoked = govrn.revokeAttestatation(0);
        assertTrue(revoked);
    }

    function testRevokeRevertAttestation() public {
        // warp
        vm.warp(100);

        // attest
        govrn.attest(0, 1);
        vm.warp(20000);
        vm.expectRevert(Govrn.DeadlinePassed.selector);
        govrn.revokeAttestatation(0);
    }

    function testRevokeErrorAttestation() public {
        vm.expectRevert(bytes("Attestation does not exist"));
        govrn.revokeAttestatation(0);
    }
}
