# pushp 

Attaches value to array within an object.

## usage

``` js
var pp = require('pushp');

var obj = { id: 1, collection: [2,3]};
obj.collection = _pp(obj).push('id', 'collection');
#=> { id: 1, collection: [1,2,3]}
```

## install

```
npm install pushp --save
```

## test

```
npm test
```

## license

MIT


