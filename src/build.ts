import tsup from 'tsup'

tsup.build({
  entry: ['src/index.ts'],
  outDir: 'dist',
  dts: {
    entry: ['src/index.ts'],
  },
  bundle: true,
  target: 'esnext',
  format: 'esm',
  clean: true,
})
