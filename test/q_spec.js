var assert = require('assert');

var q = require('../q.js');

describe('q',function(){
	/*context('3 columns, 1 table', function(){
        it('should return 1', function(){

        	selectColumns = ['id','title'];

            table = [{
				'id':'asd',
				'title':'asdasdas',
				'content':'aosndoaksnda'
			}];

		    assert.equal(
	    		q.select(selectColumns).from(table), 
	    		[{'id': 'asd'},{'title':'asdasdas'}]
		    );

	    });
   	});*/

	context('select',function(){
		it('test select id',function(){
			cols = ['id'];

            table = [{
				'id':'asd'
			}];

		    assert.equal(
	    		q.select(cols), cols
		    );
		})
	});

	/*context('from',function(){
		it('test from id',function(){
			cols = ['id'];

            table = [{id:123},{id:777}];
            console.log(q)
		    assert.equal( q.select(cols).from(table), [{id:123},{id:777}]);
		})
	});*/
	

});