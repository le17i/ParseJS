export default function (value, precision) {
  if(value === undefined || precision === undefined) return null

  value = value.toString()

  var v = parseFloat(value).toFixed(precision)
  v = v.replace(/\./g, ",")
  return v
}
