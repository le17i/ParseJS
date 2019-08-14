import parseDate from './helpers/date/parse'

export default function () {
  return parseDate(this.value) !== null
}
