var test = require('tap').test;
var pp = require('../');

test('return array with obj.value prepended to array', function(t) {
  var obj = { id: 1, collection: [2] };
  t.equals(pp(obj).push('id', 'collection')[0], 1);
  t.end();
});

test('set obj array from attach result', function(t) {
  var obj = { id: 1, collection: [2] };
  obj.collection = pp(obj).push('id', 'collection');
  t.equals(obj.collection.length, 2);
  t.end();
});

test('return array with deep.obj.value prepended to deep.array', function(t){
  var obj = {really: { deep: { id: 1, collection: [2] }}};
  obj.really.deep.collection = pp(obj).push(
    'really.deep.id',
    'really.deep.collection'
  );
  t.equals(obj.really.deep.collection.length, 2);
  t.end();
});

test('if no value then attach should return array', function(t) {
  var obj = {really: { deep: { collection: [2] }}};
  obj.really.deep.collection = pp(obj).push(
    'really.deep.id',
    'really.deep.collection'
  );
  t.equals(obj.really.deep.collection.length, 1);
  t.end();  
});