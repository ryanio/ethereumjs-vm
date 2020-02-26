[ethereumjs-blockchain](../README.md) › ["util"](_util_.md)

# Module: "util"

## Index

### Variables

- [headBlockKey](_util_.md#const-headblockkey)
- [headHeaderKey](_util_.md#const-headheaderkey)
- [headsKey](_util_.md#const-headskey)

### Functions

- [bodyKey](_util_.md#const-bodykey)
- [bufBE8](_util_.md#const-bufbe8)
- [hashToNumberKey](_util_.md#const-hashtonumberkey)
- [headerKey](_util_.md#const-headerkey)
- [numberToHashKey](_util_.md#const-numbertohashkey)
- [tdKey](_util_.md#const-tdkey)

## Variables

### `Const` headBlockKey

• **headBlockKey**: _"LastBlock"_ = "LastBlock"

_Defined in [util.ts:13](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L13)_

Current canonical head for full sync

---

### `Const` headHeaderKey

• **headHeaderKey**: _"LastHeader"_ = "LastHeader"

_Defined in [util.ts:9](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L9)_

Current canonical head for light sync

---

### `Const` headsKey

• **headsKey**: _"heads"_ = "heads"

_Defined in [util.ts:5](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L5)_

## Functions

### `Const` bodyKey

▸ **bodyKey**(`n`: BN, `hash`: Buffer): _Buffer‹›_

_Defined in [util.ts:43](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L43)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `n`    | BN     |
| `hash` | Buffer |

**Returns:** _Buffer‹›_

---

### `Const` bufBE8

▸ **bufBE8**(`n`: BN): _Buffer‹›_

_Defined in [util.ts:40](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L40)_

Convert BN to big endian Buffer

**Parameters:**

| Name | Type |
| ---- | ---- |
| `n`  | BN   |

**Returns:** _Buffer‹›_

---

### `Const` hashToNumberKey

▸ **hashToNumberKey**(`hash`: Buffer): _Buffer‹›_

_Defined in [util.ts:45](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L45)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `hash` | Buffer |

**Returns:** _Buffer‹›_

---

### `Const` headerKey

▸ **headerKey**(`n`: BN, `hash`: Buffer): _Buffer‹›_

_Defined in [util.ts:42](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L42)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `n`    | BN     |
| `hash` | Buffer |

**Returns:** _Buffer‹›_

---

### `Const` numberToHashKey

▸ **numberToHashKey**(`n`: BN): _Buffer‹›_

_Defined in [util.ts:44](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L44)_

**Parameters:**

| Name | Type |
| ---- | ---- |
| `n`  | BN   |

**Returns:** _Buffer‹›_

---

### `Const` tdKey

▸ **tdKey**(`n`: BN, `hash`: Buffer): _Buffer‹›_

_Defined in [util.ts:41](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L41)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `n`    | BN     |
| `hash` | Buffer |

**Returns:** _Buffer‹›_
