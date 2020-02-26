module.exports = {
  inputFiles: ['src/*.ts', 'src/genesisStates/*.ts'],
  mode: 'library',
  out: 'docs',
  plugin: 'typedoc-plugin-markdown',
  readme: 'none',
  gitRevision: 'master',
  exclude: 'test/**/*.ts',
  excludeNotExported: true,
  excludePrivate: true,
  excludeProtected: true,
}
