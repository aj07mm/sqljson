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
			var result = [];
            _.forEach(q._table,function(row) {
            	var resultRow = {};
                _.forEach(q._columns,function(colValue,index){
                	resultRow[index] = row[index];
                });
                result.push(resultRow);
            });
			
			return result;
		}

};