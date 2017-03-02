## move-decimal

A 50% faster Drop-in replacement for [move-decimal-point](https://www.npmjs.com/package/move-decimal-point).

Moves the decimal in a string to right/left.
Usefull when wanting to perform accurate division/multiplication with powers of 10 without any precision issues

### Install

    npm i move-decimal

### Use
```js
var move_decimal = require('move-decimal');

// Move to the right
move_decimal('123.456', 1); // '1234.56'
move_decimal('123.456', 3); // '123456'
move_decimal('123.456', 5); // '12345600'

// Move to the left
move_decimal('123.456', -1); // '12.3456'
move_decimal('123.456', -3); // '0.123456'
move_decimal('123.456', -5); // '0.00123456'
```

### Test

    git clone git@github.com:thehobbit85/move-decimal.git
    cd move-decimal
    npm i && npm test


### Benchmark

Running benchmarks vs move-decimal-point.
Results will be appended to the testResult.txt file.

    git clone git@github.com:thehobbit85/move-decimal.git
    cd move-decimal
    npm i && npm run benchmark


### License
MIT