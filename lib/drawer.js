const { createCanvas, loadImage } = require('canvas')
const CANVAS_WIDTH = 1280
const CANVAS_HEIGHT = 640
const cwd = process.cwd()

const drawer = args => {
  const {
    bgColor,
    fgColor,
    titleSize,
    titleFont,
    descriptionSize,
    descriptionFont,
    title,
    description
  } = {
    bgColor: 'white',
    fgColor: 'black',
    titleSize: 64,
    titleFont: 'Impact',
    descriptionSize: 32,
    descriptionFont: 'Impact',
    ...args
  }

  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  const context = canvas.getContext('2d')

  // fill background
  context.fillStyle = bgColor
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  // Write Title
  context.font = `${titleSize}px ${titleFont}`
  context.fillStyle = fgColor
  const { width: titleWidth } = context.measureText(title)
  const titleLeft = (CANVAS_WIDTH - titleWidth) / 2
  const titleTop = (CANVAS_HEIGHT - titleSize) / 2
  context.fillText(title, titleLeft, titleTop)

  // Write Description
  context.font = `${descriptionSize}px ${descriptionFont}`
  context.fillStyle = fgColor
  const { width: descriptionWidth } = context.measureText(description)
  const descriptionLeft = (CANVAS_WIDTH - descriptionWidth) / 2
  const descriptionTop = (CANVAS_HEIGHT + titleTop + titleSize) / 2
  context.fillText(description, descriptionLeft, descriptionTop)

  return canvas.toBuffer()
}

module.exports = drawer
