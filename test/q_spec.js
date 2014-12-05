var assert = require('assert');

var q = require('../q.js');

describe('q',function(){
	context('from',function(){
		it('test from id',function(){
			cols = ['id'];

            fooTable = [{id:123},{id:777}];
       
		    assert.equal( q.select(cols).from(fooTable), [{id:123},{id:777}]);
		})
	});
	

});