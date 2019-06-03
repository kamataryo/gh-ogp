#!/usr/bin/env node

const Command = require('xcm').default
const readPkgUp = require('read-pkg-up')
const drawer = require('./lib/drawer')

const capitalize = ([head, ...rest]) => head.toUpperCase() + rest.join('')

const handler = theme => async (_0, opts) => {
  const options = Object.entries(opts)
    .map(([key, value]) => [
      key
        .split('-')
        .map((word, i) => (i !== 0 ? capitalize(word) : word))
        .join(''),
      value
    ])
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {})
  const {
    package: { name: title, description }
  } = await readPkgUp()

  const buf = drawer({ theme, title, description })
  process.stdout.write(buf)
}

const command = new Command('gh-ogp')
  .sub('dark')
  .action(handler('dark'))
  .super()
  .sub('light')
  .action(handler('light'))
  .super()
  .parse()
// .option('bg-color', { default: 'white' })
// .option('fg-color', { default: 'black' })
