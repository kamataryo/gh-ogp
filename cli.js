#!/usr/bin/env node
const readPkgUp = require('read-pkg-up')
const drawer = require('./lib/drawer')

const main = async () => {
  const {
    package: { name: title, description }
  } = await readPkgUp()
  const buf = drawer({ title, description })
  process.stdout.write(buf)
}

// go!
main()
