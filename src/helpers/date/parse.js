const REGEX = [
  {
    test: /(\d{2})[-|\/|\.](\d{2})[-|\/|\.](\d{4})/g,
    replace: '$3-$2-$1'
  },
  {
    test:/(\d{4})[-|\/|\.](\d{2})[-|\/|\.](\d{2})/g,
    replace: '$1-$2-$3'
  },
  {
    test:/\/Date\((-?\d+)\)\//g,
    replace: '$1'
  }
]

export default function (value) {
  try {
    if(value instanceof Date) {
      return value
    }

    const reg = REGEX.find(regex => value.match(regex.test))

    if (reg) {
      let replace
      if (reg.replace.includes('-')) {
        replace = value.replace(regex.test, regex.replace).split("-")
        return new Date(parseInt(replace[0]), parseInt(--replace[1]), parseInt(replace[2]))
      } else {
        replace = parseInt(value.replace(regex.test, regex.replace))
        return new Date(replace)
      }
    }
    return null
  } catch (error) {
    console.error(error)
    return null
  }
}
