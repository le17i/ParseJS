export default function (value) {
  const regex = `${value}`.includes('.') ? /(\d)(?=(\d{3})+\,)/g : /(\d)(?=(\d{3})+(?!\d))/g
  return (value) ? `${value}`.replace(/\./g, ',').replace(regex, '$1.') : value
}
