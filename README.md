# ParseJS
A library JS to format numbers and dates.

```js
// Parse to currency string. Returns 'R$10,00'
parse(10.000).toCurrency();

// Parse to percent string. Returns '10,00%'
parse(10.000).toPercent(2);

// Parse to number. Returns '10,00'
parse(10.000).toNumber(2);

// Parse to date object. Returns Wed Dec 10 2014
parse("10/12/2014").toDate();
```
## Help and Support
   See the [documentation](https://github.com/le17i/ParseJS/wiki).
   Any questions, see the [Issues](https://github.com/le17i/ParseJS/issues).

## Tests
   First install the dependencies, then run **npm tests**:

```bash
$ npm install
$ npm tests
```

## License
   [MIT](LICENSE)
