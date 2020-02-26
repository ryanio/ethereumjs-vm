[ethereumjs-blockchain](../README.md) › ["index"](../modules/_index_.md) › [Blockchain](_index_.blockchain.md)

# Class: Blockchain

This class stores and interacts with blocks.

## Hierarchy

* **Blockchain**

## Implements

* [BlockchainInterface](../interfaces/_index_.blockchaininterface.md)

## Index

### Constructors

* [constructor](_index_.blockchain.md#constructor)

### Properties

* [db](_index_.blockchain.md#db)
* [dbManager](_index_.blockchain.md#dbmanager)
* [ethash](_index_.blockchain.md#ethash)
* [validate](_index_.blockchain.md#validate)

### Accessors

* [meta](_index_.blockchain.md#meta)

### Methods

* [delBlock](_index_.blockchain.md#delblock)
* [getBlock](_index_.blockchain.md#getblock)
* [getBlocks](_index_.blockchain.md#getblocks)
* [getDetails](_index_.blockchain.md#getdetails)
* [getHead](_index_.blockchain.md#gethead)
* [getLatestBlock](_index_.blockchain.md#getlatestblock)
* [getLatestHeader](_index_.blockchain.md#getlatestheader)
* [iterator](_index_.blockchain.md#iterator)
* [putBlock](_index_.blockchain.md#putblock)
* [putBlocks](_index_.blockchain.md#putblocks)
* [putGenesis](_index_.blockchain.md#putgenesis)
* [putHeader](_index_.blockchain.md#putheader)
* [putHeaders](_index_.blockchain.md#putheaders)
* [selectNeededHashes](_index_.blockchain.md#selectneededhashes)

## Constructors

###  constructor

\+ **new Blockchain**(`opts`: [BlockchainOptions](../interfaces/_index_.blockchainoptions.md)): *[Blockchain](_index_.blockchain.md)*

*Defined in [index.ts:184](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L184)*

Creates new Blockchain object

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`opts` | [BlockchainOptions](../interfaces/_index_.blockchainoptions.md) | {} | An object with the options that this constructor takes. See [BlockchainOptions](../interfaces/_index_.blockchainoptions.md).  |

**Returns:** *[Blockchain](_index_.blockchain.md)*

## Properties

###  db

• **db**: *any*

*Defined in [index.ts:172](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L172)*

___

###  dbManager

• **dbManager**: *DBManager*

*Defined in [index.ts:173](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L173)*

___

###  ethash

• **ethash**: *any*

*Defined in [index.ts:174](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L174)*

___

###  validate

• **validate**: *boolean* = true

*Defined in [index.ts:181](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L181)*

This field is always `true`. It's here only for backwards compatibility.

**`deprecated`** 

## Accessors

###  meta

• **get meta**(): *object*

*Defined in [index.ts:242](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L242)*

Returns an object with metadata about the Blockchain. It's defined for backwards compatibility.

**Returns:** *object*

* **genesis**: *any* = this._genesis

* **heads**: *any* = this._heads

* **rawHead**: *any* = this._headHeader

## Methods

###  delBlock

▸ **delBlock**(`blockHash`: Buffer, `cb`: any): *void*

*Implementation of [BlockchainInterface](../interfaces/_index_.blockchaininterface.md)*

*Defined in [index.ts:890](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L890)*

Deletes a block from the blockchain. All child blocks in the chain are deleted and any
encountered heads are set to the parent block.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blockHash` | Buffer | The hash of the block to be deleted |
`cb` | any | A callback.  |

**Returns:** *void*

___

###  getBlock

▸ **getBlock**(`blockTag`: Buffer | number | BN, `cb`: any): *void*

*Defined in [index.ts:627](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L627)*

Gets a block by its hash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blockTag` | Buffer &#124; number &#124; BN | The block's hash or number |
`cb` | any | The callback. It is given two parameters `err` and the found `block` (an instance of https://github.com/ethereumjs/ethereumjs-block) if any.  |

**Returns:** *void*

___

###  getBlocks

▸ **getBlocks**(`blockId`: Buffer | number, `maxBlocks`: number, `skip`: number, `reverse`: boolean, `cb`: any): *void*

*Defined in [index.ts:650](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L650)*

Looks up many blocks relative to blockId

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blockId` | Buffer &#124; number | The block's hash or number |
`maxBlocks` | number | Max number of blocks to return |
`skip` | number | Number of blocks to skip apart |
`reverse` | boolean | Fetch blocks in reverse |
`cb` | any | The callback. It is given two parameters `err` and the found `blocks` if any.  |

**Returns:** *void*

___

###  getDetails

▸ **getDetails**(`_`: string, `cb`: any): *void*

*Implementation of [BlockchainInterface](../interfaces/_index_.blockchaininterface.md)*

*Defined in [index.ts:691](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L691)*

This method used to return block details by its hash. It's only here for backwards compatibility.

**`deprecated`** 

**Parameters:**

Name | Type |
------ | ------ |
`_` | string |
`cb` | any |

**Returns:** *void*

___

###  getHead

▸ **getHead**(`name`: any, `cb?`: any): *void*

*Defined in [index.ts:338](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L338)*

Returns the specified iterator head.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | any | Optional name of the state root head (default: 'vm') |
`cb?` | any | The callback. It is given two parameters `err` and the returned `block`  |

**Returns:** *void*

___

###  getLatestBlock

▸ **getLatestBlock**(`cb`: any): *void*

*Defined in [index.ts:378](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L378)*

Returns the latest full block in the canonical chain.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | any | The callback. It is given two parameters `err` and the returned `block`  |

**Returns:** *void*

___

###  getLatestHeader

▸ **getLatestHeader**(`cb`: any): *void*

*Defined in [index.ts:361](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L361)*

Returns the latest header in the canonical chain.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | any | The callback. It is given two parameters `err` and the returned `header`  |

**Returns:** *void*

___

###  iterator

▸ **iterator**(`name`: string, `onBlock`: any, `cb`: any): *void*

*Implementation of [BlockchainInterface](../interfaces/_index_.blockchaininterface.md)*

*Defined in [index.ts:1024](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L1024)*

Iterates through blocks starting at the specified iterator head and calls the onBlock function
on each block. The current location of an iterator head can be retrieved using the `getHead()`
method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of the state root head |
`onBlock` | any | Function called on each block with params (block, reorg, cb) |
`cb` | any | A callback function  |

**Returns:** *void*

___

###  putBlock

▸ **putBlock**(`block`: object, `cb`: any, `isGenesis?`: undefined | false | true): *void*

*Defined in [index.ts:407](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L407)*

Adds a block to the blockchain.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`block` | object | The block to be added to the blockchain |
`cb` | any | The callback. It is given two parameters `err` and the saved `block`  |
`isGenesis?` | undefined &#124; false &#124; true | - |

**Returns:** *void*

___

###  putBlocks

▸ **putBlocks**(`blocks`: Array‹any›, `cb`: any): *void*

*Defined in [index.ts:391](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L391)*

Adds many blocks to the blockchain.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blocks` | Array‹any› | The blocks to be added to the blockchain |
`cb` | any | The callback. It is given two parameters `err` and the last of the saved `blocks`  |

**Returns:** *void*

___

###  putGenesis

▸ **putGenesis**(`genesis`: any, `cb`: any): *void*

*Defined in [index.ts:328](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L328)*

Puts the genesis block in the database

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`genesis` | any | The genesis block to be added |
`cb` | any | The callback. It is given two parameters `err` and the saved `block`  |

**Returns:** *void*

___

###  putHeader

▸ **putHeader**(`header`: object, `cb`: any): *void*

*Defined in [index.ts:439](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L439)*

Adds a header to the blockchain.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`header` | object | The header to be added to the blockchain |
`cb` | any | The callback. It is given two parameters `err` and the saved `header`  |

**Returns:** *void*

___

###  putHeaders

▸ **putHeaders**(`headers`: Array‹any›, `cb`: any): *void*

*Defined in [index.ts:423](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L423)*

Adds many headers to the blockchain.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`headers` | Array‹any› | The headers to be added to the blockchain |
`cb` | any | The callback. It is given two parameters `err` and the last of the saved `headers`  |

**Returns:** *void*

___

###  selectNeededHashes

▸ **selectNeededHashes**(`hashes`: Array‹any›, `cb`: any): *void*

*Defined in [index.ts:701](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/blockchain/src/index.ts#L701)*

Given an ordered array, returns to the callback an array of hashes that are not in the blockchain yet.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hashes` | Array‹any› | Ordered array of hashes |
`cb` | any | The callback. It is given two parameters `err` and hashes found.  |

**Returns:** *void*
