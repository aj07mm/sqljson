var _ = require('underscore');
var q = {
		
		_table : [],
		_columns : [],

		select : function(columns) {

			if(! _.isArray(columns) ) {
				throw "columns must be an array"
			}

			q._columns = columns;

			return this;
		},
		
		from : function(table) {
			q._table = 	table;
			if(q._columns == ['*']){
				return table;
			}
			var result = [];
            _.forEach(q._table,function(row) {
            	for (var col in q._columns) {
            		if( col in Object.keys(row)){
            			result.push(row);
            			break
            		}
				}
            });

			return result;
		}

};

exports.q = q;