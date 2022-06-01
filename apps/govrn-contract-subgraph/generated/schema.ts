// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Contribution extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("contributionId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Contribution entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Contribution must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Contribution", id.toString(), this);
    }
  }

  static load(id: string): Contribution | null {
    return changetype<Contribution | null>(store.get("Contribution", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get attestations(): Array<string> | null {
    let value = this.get("attestations");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set attestations(value: Array<string> | null) {
    if (!value) {
      this.unset("attestations");
    } else {
      this.set("attestations", Value.fromStringArray(<Array<string>>value));
    }
  }

  get contributionId(): BigInt {
    let value = this.get("contributionId");
    return value!.toBigInt();
  }

  set contributionId(value: BigInt) {
    this.set("contributionId", Value.fromBigInt(value));
  }
}

export class Attestation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("attestor", Value.fromBytes(Bytes.empty()));
    this.set("confidence", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Attestation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Attestation must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Attestation", id.toString(), this);
    }
  }

  static load(id: string): Attestation | null {
    return changetype<Attestation | null>(store.get("Attestation", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get attestor(): Bytes {
    let value = this.get("attestor");
    return value!.toBytes();
  }

  set attestor(value: Bytes) {
    this.set("attestor", Value.fromBytes(value));
  }

  get confidence(): i32 {
    let value = this.get("confidence");
    return value!.toI32();
  }

  set confidence(value: i32) {
    this.set("confidence", Value.fromI32(value));
  }

  get contribution(): string | null {
    let value = this.get("contribution");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contribution(value: string | null) {
    if (!value) {
      this.unset("contribution");
    } else {
      this.set("contribution", Value.fromString(<string>value));
    }
  }
}
