var assert = require('assert');
//var _ = require('../bower_components/undescore/undescore.js');
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

<<<<<<< HEAD:spec/q_spec.js
		    assert.equal(q.select(selectColumns), [{
		    	'id': 'asd',
		    	'title':'asdasdas'
		    }]);
=======
		    assert.equal(q.select(selectColumns).from(table), [{'id': 'asd'},{'title':'asdasdas'}]);
>>>>>>> bdb9f7409ff27500cd83230a30ae5573aea3a009:test/q_spec.js
	    });
   	});
});