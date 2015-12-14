var assert = require('assert');
var _ = require('underscore');
var q = require('../q.js').q;

describe('q',function(){
	context('select',function(){
		it('* from table',function(){
			cols = ['*'];
			table = [{id:123},{id:777}];

			assert.deepEqual(q.select(cols).from(table), table);
		})
		it('id from table',function(){
			cols = ['id'];
			table = [{id:123},{id:777}];
			// table == q.select(cols).from(table)
			assert.deepEqual(q.select(cols).from(table), table);
		})
		it('id, foo from table',function(){
			cols = ['id','foo'];
			table = [{id:123},{id:777},{id:123, foo:555}];

			assert.deepEqual(q.select(cols).from(table), table);
		})
		it('foo from table',function(){
			cols = ['foo'];
			table = [{id:123, foo:555}];

			assert.deepEqual(q.select(cols).from(table), table);
		})
		it('id, age, location from table and foo random',function(){
			cols = ['id', 'age', 'location'];
			table = [{id:123, foo:555}, {id:123, age:555}, {id:123, age:555, location: 'asdasdasd'}];

			assert.deepEqual(q.select(cols).from(table), table);
		})
	});
	context('select',function(){
		it('* from table',function(){
			cols = ['id'];
			table = [{id:123},{id:777}];

			assert.deepEqual(q.select(cols).from(table), table);
		})
	})
});