[ethereumjs-blockchain](../README.md) › ["util"](_util_.md)

# Module: "util"

## Index

### Variables

* [headBlockKey](_util_.md#const-headblockkey)
* [headHeaderKey](_util_.md#const-headheaderkey)
* [headsKey](_util_.md#const-headskey)

### Functions

* [bodyKey](_util_.md#const-bodykey)
* [bufBE8](_util_.md#const-bufbe8)
* [hashToNumberKey](_util_.md#const-hashtonumberkey)
* [headerKey](_util_.md#const-headerkey)
* [numberToHashKey](_util_.md#const-numbertohashkey)
* [tdKey](_util_.md#const-tdkey)

## Variables

### `Const` headBlockKey

• **headBlockKey**: *"LastBlock"* = "LastBlock"

*Defined in [util.ts:13](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L13)*

Current canonical head for full sync

___

### `Const` headHeaderKey

• **headHeaderKey**: *"LastHeader"* = "LastHeader"

*Defined in [util.ts:9](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L9)*

Current canonical head for light sync

___

### `Const` headsKey

• **headsKey**: *"heads"* = "heads"

*Defined in [util.ts:5](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L5)*

## Functions

### `Const` bodyKey

▸ **bodyKey**(`n`: BN, `hash`: Buffer): *Buffer‹›*

*Defined in [util.ts:43](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | BN |
`hash` | Buffer |

**Returns:** *Buffer‹›*

___

### `Const` bufBE8

▸ **bufBE8**(`n`: BN): *Buffer‹›*

*Defined in [util.ts:40](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L40)*

Convert BN to big endian Buffer

**Parameters:**

Name | Type |
------ | ------ |
`n` | BN |

**Returns:** *Buffer‹›*

___

### `Const` hashToNumberKey

▸ **hashToNumberKey**(`hash`: Buffer): *Buffer‹›*

*Defined in [util.ts:45](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | Buffer |

**Returns:** *Buffer‹›*

___

### `Const` headerKey

▸ **headerKey**(`n`: BN, `hash`: Buffer): *Buffer‹›*

*Defined in [util.ts:42](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | BN |
`hash` | Buffer |

**Returns:** *Buffer‹›*

___

### `Const` numberToHashKey

▸ **numberToHashKey**(`n`: BN): *Buffer‹›*

*Defined in [util.ts:44](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | BN |

**Returns:** *Buffer‹›*

___

### `Const` tdKey

▸ **tdKey**(`n`: BN, `hash`: Buffer): *Buffer‹›*

*Defined in [util.ts:41](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/util.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | BN |
`hash` | Buffer |

**Returns:** *Buffer‹›*
