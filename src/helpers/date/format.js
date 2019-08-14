import parse from './parse'

export default function (format, value) {
  var date = parse(value);

  if(date === false || date === undefined) return false;

  var day = date.getDate().toString().replace(/(?=(^\d{1}$))/g, '0');
  var month = (date.getMonth() + 1).toString().replace(/(?=(^\d{1}$))/g, '0');

  var formatDate = format
     .replace(/dd/gi, day)
     .replace(/mm/gi, month)
     .replace(/yyyy/gi, date.getFullYear());

  return formatDate;
}