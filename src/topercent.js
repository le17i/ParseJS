import precisionNumber from './helpers/number/precision'
import formatNumber from './helpers/number/format'

export default function(precision) {

  var value = precisionNumber(this.value, precision)
  value = formatNumber(value)

  return (value === null) ? 'Invalid value' : `${value}%`
};
