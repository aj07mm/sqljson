var assert = require('assert');
var _ = require('underscore');

var q = require('../q.js').q;
//table == array of objects
describe('q',function(){
	context('select',function(){
		it('* from table',function(){
			cols = ['*'];
			table = [{id:123},{id:777}];

			assert.equal(q.select(cols).from(table), table);
		})
		it('id from table',function(){
			cols = ['id'];
			table = [{id:123},{id:777}];

			assert.equal(q.select(cols).from(table), table);
		})
		it('id, foo from table',function(){
			cols = ['id','foo'];
			table = [{id:123},{id:777},{id:123, foo:555}];

			assert.equal(q.select(cols).from(table), table);
		})
	});
});