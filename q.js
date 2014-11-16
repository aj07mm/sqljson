var q = {
		
		'table' : [],
		
		'select' : function(columns) {
			if(! _.isArray(columns) ) {
				throw "columns must be an array"
			}

			var result = [];

			_.forEach(this,function(row,index){
				_.forEach(columns,function(col,index){
					result.push(row[col]); 
				});
			});

			return result;
		},
		
		'from' : function(table){
			q.table.push(table);
			return table;
		}

};