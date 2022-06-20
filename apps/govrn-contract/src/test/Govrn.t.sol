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
        govrn = new Govrn();
        govrn.initialize(1000);
    }

    function testNewContribution() public {
        govrn.mint("here", 1, 2);
        (
            address owner,
            bytes memory detailsUri,
            uint256 dateOfSubmission,
            uint256 dateOfEngagement
        ) = govrn.contributions(0);
        assertTrue(owner == address(this));
        assertTrue(keccak256(detailsUri) == keccak256("here"));
        assertTrue(dateOfSubmission == 1);
        assertTrue(dateOfEngagement == 2);
    }

    function testBulkMintTwo() public {
        Govrn.BulkContribution[]
            memory contributions = new Govrn.BulkContribution[](2);
        contributions[0] = Govrn.BulkContribution(
            Govrn.Contribution(address(this), "here", 1, 2)
        );
        contributions[1] = Govrn.BulkContribution(
            Govrn.Contribution(address(this), "here1", 1, 2)
        );
        govrn.bulkMint(contributions);

        (, bytes memory detailsUri, , ) = govrn.contributions(0);
        assertTrue(keccak256(detailsUri) == keccak256("here"));
        (, bytes memory detailsUri2, , ) = govrn.contributions(1);
        assertTrue(keccak256(detailsUri2) == keccak256("here1"));
    }
}

contract GovrnAttestTest is DSTestPlus {
    Govrn govrn;
    Vm public constant vm = Vm(HEVM_ADDRESS);

    function mintContribution(
        bytes memory _detailsUri,
        uint256 _dateOfSubmission,
        uint256 _dateOfEngagement
    ) public {
        govrn.mint(
            _detailsUri,
            _dateOfSubmission,
            _dateOfEngagement
        );
    }

    function setUp() public {
        govrn = new Govrn();
        govrn.initialize(1000);
        this.mintContribution("here", 1, 2);
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
        this.mintContribution("here4", 5, 6);
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

}

contract GovrnPermitAttestTest is DSTestPlus {
    Govrn govrn;
    Vm public constant vm = Vm(HEVM_ADDRESS);

    function _mintContribution(
        bytes memory _detailsUri,
        uint256 _dateOfSubmission,
        uint256 _dateOfEngagement
    ) public {
        govrn.mint(
            _detailsUri,
            _dateOfSubmission,
            _dateOfEngagement
        );
    }

    function setUp() public {
        govrn = new Govrn();
        govrn.initialize(1000);
        this._mintContribution("here", 1, 2);
    }

    // TODO: Add deadline test, bad nonce, bad signature
    function testPermitAttest() public {
        uint256 privateKey = 0xBEEF;
        address owner = hevm.addr(privateKey);
        // mint

        govrn.mint("here", 1, 2);
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

    function testBulkPermitAttest() public {
        uint256 privateKey = 0xBEEF;
        address owner = hevm.addr(privateKey);
        // mint
        Govrn.PermitAttestation[] memory bulkPermitAttest = new Govrn.PermitAttestation[](2);
        govrn.mint("here", 1, 2);
        govrn.mint("here", 1, 2);
        (uint8 vOne, bytes32 rOne, bytes32 sOne) = hevm.sign(
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
        (uint8 vTwo, bytes32 rTwo, bytes32 sTwo) = hevm.sign(
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
                            1,
                            1,
                            100,
                            1,
                            block.timestamp
                        )
                    )
                )
            )
        );
        bulkPermitAttest[0] = Govrn.PermitAttestation(
                 owner,
                 0,
                 1,
                 100,
                 block.timestamp,
                 vOne,
                 rOne,
                 sOne
        );
        bulkPermitAttest[1] = Govrn.PermitAttestation(
                 owner,
                 1,
                 1,
                 100,
                 block.timestamp,
                 vTwo,
                 rTwo,
                 sTwo
        );
        govrn.bulkPermitAttest(bulkPermitAttest);
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
        govrn = new Govrn();
        govrn.initialize(1000);
        govrn.mint("here", 1, 2);
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


contract GovrnBulkRevokeTest is DSTestPlus {
    Govrn govrn;
    Vm public constant vm = Vm(HEVM_ADDRESS);

    function setUp() public {
        govrn = new Govrn();
        govrn.initialize(1000);
        govrn.mint("here", 1, 2);
        govrn.mint("here", 1, 2);
    }

    function testRevokeAttestation() public {
        vm.warp(100);
        uint256[] memory attestations = new uint256[](2);
        attestations[0] = 0;
        attestations[1] = 1;

        govrn.attest(0, 1);
        govrn.attest(1, 1);

        govrn.bulkRevokeAttestation(attestations);
    }

    function testRevokeRevertAttestation() public {
        // warp
        vm.warp(100);
        uint256[] memory attestations = new uint256[](1);
        attestations[0] = 0;

        // attest
        govrn.attest(0, 1);

        vm.warp(20000);
        vm.expectRevert(Govrn.DeadlinePassed.selector);
        govrn.bulkRevokeAttestation(attestations);
    }

    function testRevokeErrorAttestation() public {
        uint256[] memory attestations = new uint256[](1);
        attestations[0] = 0;
        vm.expectRevert(bytes("Attestation does not exist"));
        govrn.bulkRevokeAttestation(attestations);
    }
}

contract GovrnBurnTest is DSTestPlus {
    Govrn govrn;
    Vm public constant vm = Vm(HEVM_ADDRESS);

    function setUp() public {
        govrn = new Govrn();
        govrn.initialize(1000);
        govrn.mint("here", 1, 2);
        govrn.mint("here", 1, 2);
    }

    function testBurnContribution() public {
        bool burned = govrn.burnContribution(1);
        (address owner, , , ) = govrn.contributions(1);
        assertTrue(burned);
        assertTrue(owner == address(0));
        assertTrue(govrn.balanceOf(address(this)) == 1);
    }

    function testBurnContributionNotOwner() public {
        uint256 privateKey = 0xBEEF;
        address notOwner = hevm.addr(privateKey);
        vm.prank(notOwner);
        vm.expectRevert(Govrn.NotOwner.selector);
         govrn.burnContribution(0);
    }

    function testBurnContributionZeroAddress() public {
        vm.prank(address(0));
        vm.expectRevert(Govrn.ZeroAddress.selector);
        govrn.burnContribution(0);
    }

}
