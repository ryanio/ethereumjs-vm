[ethereumjs-blockchain](../README.md) › ["index"](../modules/_index_.md) › [BlockchainOptions](_index_.blockchainoptions.md)

# Interface: BlockchainOptions

This are the options that the Blockchain constructor can receive.

## Hierarchy

* **BlockchainOptions**

## Index

### Properties

* [chain](_index_.blockchainoptions.md#optional-chain)
* [common](_index_.blockchainoptions.md#optional-common)
* [db](_index_.blockchainoptions.md#optional-db)
* [hardfork](_index_.blockchainoptions.md#optional-hardfork)
* [validate](_index_.blockchainoptions.md#optional-validate)
* [validateBlocks](_index_.blockchainoptions.md#optional-validateblocks)
* [validatePow](_index_.blockchainoptions.md#optional-validatepow)

## Properties

### `Optional` chain

• **chain**? : *string | number*

*Defined in [index.ts:76](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L76)*

The chain id or name. Default: `"mainnet"`.

___

### `Optional` common

• **common**? : *Common*

*Defined in [index.ts:87](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L87)*

An alternative way to specify the chain and hardfork is by passing a Common instance.

___

### `Optional` db

• **db**? : *any*

*Defined in [index.ts:93](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L93)*

Database to store blocks and metadata. Should be a
[levelup](https://github.com/rvagg/node-levelup) instance.

___

### `Optional` hardfork

• **hardfork**? : *string | null*

*Defined in [index.ts:82](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L82)*

Hardfork for the blocks. If `undefined` or `null` is passed, it gets computed based on block
numbers.

___

### `Optional` validate

• **validate**? : *undefined | false | true*

*Defined in [index.ts:101](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L101)*

This the flag indicates if blocks and Proof-of-Work should be validated.
This option can't be used in conjunction with `validatePow` nor `validateBlocks`.

**`deprecated`** 

___

### `Optional` validateBlocks

• **validateBlocks**? : *undefined | false | true*

*Defined in [index.ts:115](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L115)*

This flags indicates if blocks should be validated. See Block#validate for details. If
`validate` is provided, this option takes its value. If neither `validate` nor this option are
provided, it defaults to `true`.

___

### `Optional` validatePow

• **validatePow**? : *undefined | false | true*

*Defined in [index.ts:108](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L108)*

This flags indicates if Proof-of-work should be validated. If `validate` is provided, this
option takes its value. If neither `validate` nor this option are provided, it defaults to
`true`.
