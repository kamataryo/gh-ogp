const { createCanvas, loadImage } = require('canvas')
const { getRandomColorPair } = require('./color')
const CANVAS_WIDTH = 1280
const CANVAS_HEIGHT = 640
const cwd = process.cwd()

const drawer = args => {
  const {
    theme,
    // bgColor,
    // fgColor,
    titleItalic = true,
    titleSize = 64,
    titleFont = 'Futura',
    descriptionItalic = false,
    descriptionSize = 32,
    descriptionFont = 'Futura',
    title,
    description
  } = args

  const { fgColor, bgColor } = getRandomColorPair(theme)
  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  const context = canvas.getContext('2d')

  // fill background
  context.fillStyle = bgColor
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  // Write Title
  context.font = `${
    titleItalic === 'true' ? 'italic ' : ''
  }${titleSize}px ${titleFont}`
  context.fillStyle = fgColor
  const { width: titleWidth } = context.measureText(title)
  const titleLeft = (CANVAS_WIDTH - titleWidth) / 2
  const titleTop = (CANVAS_HEIGHT - parseInt(titleSize)) / 2
  context.fillText(title, titleLeft, titleTop)

  // Write Description
  context.font = `${
    descriptionItalic === 'true' ? 'italic ' : ''
  }${descriptionSize}px ${descriptionFont}`
  context.fillStyle = fgColor
  const { width: descriptionWidth } = context.measureText(description)
  const descriptionLeft = (CANVAS_WIDTH - descriptionWidth) / 2
  const descriptionTop = (CANVAS_HEIGHT + titleTop + parseInt(titleSize)) / 2
  context.fillText(description, descriptionLeft, descriptionTop)
  return canvas.toBuffer()
}

module.exports = drawer
