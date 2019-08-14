import precisionNumber from './helpers/number/precision'
import formatNumber from './helpers/number/format'

Parse.prototype.toCurrency = function() {

  var value = precisionNumber(this.value, 2);
  value = formatNumber(value);

  return (value === null) ? 'Invalid value' : `R$ ${value}`;
};
