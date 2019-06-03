const getRandomColorPair = theme => {
  const isDark = theme === 'dark'

  const hue1 = Math.floor(Math.random() * 360)
  const saturation1 = 100
  const lightness1 = isDark ? 95 : 5

  const hue2 = Math.floor(Math.random() * 360)
  const saturation2 = 100
  const lightness2 = isDark ? 5 : 95

  return {
    fgColor: `hsl(${hue1},${saturation1}%,${lightness1}%)`,
    bgColor: `hsl(${hue2},${saturation2}%,${lightness2}%)`
  }
}

module.exports.getRandomColorPair = getRandomColorPair
