import formatDate from './formatDate'
import isDate from './isDate'
import toCurrency from './toCurrency'
import toDate from './toDate'
import toNumber from './toNumber'
import toPercent from './toPercent'
import toString from './toString'

function Parse (value) {
  if (!this instanceof Parse) {
    return new Parse(value)
  }

  this.value = value
  return this
}

Parse.prototype = {
  formatDate,
  isDate,
  toCurrency,
  toDate,
  toNumber,
  toPercent,
  toString
}

export default Parse
