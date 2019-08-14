import precision from './helpers/string/precision'

export default function (value) {
  const v = precision(this.value, value)

  return (v === null) ? 'Invalid value' : helpers.format.thousand(v)
}
