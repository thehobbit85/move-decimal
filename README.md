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


### Sample Benchmarks

```
-----Testing time: 2017-02-15.03:30:28-----
--------------Test number 1---------------
Testing time for this version with positive n: 6796.017ms
Testing time for move-decimal-point with positive n: 10899.133ms
Testing time for this version with negative n: 5901.543ms
Testing time for move-decimal-point with negative n: 9479.420ms
--------------Test number 2---------------
Testing time for this version with positive n: 6509.488ms
Testing time for move-decimal-point with positive n: 10621.068ms
Testing time for this version with negative n: 6064.064ms
Testing time for move-decimal-point with negative n: 9449.610ms
--------------Test number 3---------------
Testing time for this version with positive n: 6433.633ms
Testing time for move-decimal-point with positive n: 9438.716ms
Testing time for this version with negative n: 5880.500ms
Testing time for move-decimal-point with negative n: 8750.982ms
--------------Test number 4---------------
Testing time for this version with positive n: 6802.517ms
Testing time for move-decimal-point with positive n: 10045.784ms
Testing time for this version with negative n: 6216.958ms
Testing time for move-decimal-point with negative n: 8769.913ms
-------------Test Batch Ended--------------
-----Testing time: 2017-02-15.03:36:08-----
--------------Test number 1---------------
Testing time for this version with positive n: 7189.951ms
Testing time for move-decimal-point with positive n: 10526.690ms
Testing time for this version with negative n: 6183.201ms
Testing time for move-decimal-point with negative n: 9337.309ms
--------------Test number 2---------------
Testing time for this version with positive n: 6855.899ms
Testing time for move-decimal-point with positive n: 10382.469ms
Testing time for this version with negative n: 6114.810ms
Testing time for move-decimal-point with negative n: 9112.830ms
--------------Test number 3---------------
Testing time for this version with positive n: 7289.942ms
Testing time for move-decimal-point with positive n: 10826.029ms
Testing time for this version with negative n: 6205.309ms
Testing time for move-decimal-point with negative n: 9588.906ms
-------------Test Batch Ended--------------
-----Testing time: 2017-02-15.03:40:41-----
--------------Test number 1---------------
Testing time for this version with positive n: 6535.720ms
Testing time for move-decimal-point with positive n: 9993.514ms
Testing time for this version with negative n: 6206.283ms
Testing time for move-decimal-point with negative n: 8783.033ms
-------------Test Batch Ended--------------
-----Testing time: 2017-02-15.03:48:10-----
-----Number of iterations is: 100000-----
-----Number of runs is: 3-----
--------------Test number 1---------------
Testing time for this version with positive n: 6776.398ms
Testing time for move-decimal-point with positive n: 9636.879ms
Testing time for this version with negative n: 5879.424ms
Testing time for move-decimal-point with negative n: 8982.939ms
--------------Test number 2---------------
Testing time for this version with positive n: 6727.523ms
Testing time for move-decimal-point with positive n: 10558.690ms
Testing time for this version with negative n: 6579.387ms
Testing time for move-decimal-point with negative n: 9888.465ms
--------------Test number 3---------------
Testing time for this version with positive n: 7150.300ms
Testing time for move-decimal-point with positive n: 10601.151ms
Testing time for this version with negative n: 6346.945ms
Testing time for move-decimal-point with negative n: 9989.183ms
-------------Test Batch Ended--------------
```


### License
MIT