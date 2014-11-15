var assert = require('assert');
var q = require('../q.js');


describe('q',function(){
	context('3 columns, 1 table', function(){
        it('should return 1', function(){

        	selectColumns = ['id','title'];
            table = [{
				'id':'asd',
				'title':'asdasdas',
				'content':'aosndoaksnda'
			}];

		    assert.equal(q.select(selectColumns).from(table), [{'id': 'asd'},{'title':'asdasdas'}]);
	    });
   	});
});