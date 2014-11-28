var q = {
		
		'table' : [],
		
		'select' : function(columns) {
			if(! _.isArray(columns) ) {
				throw "columns must be an array"
			}

			var result = [];

			_.forEach(this,function(row,index){
				rowResult = {};
				_.forEach(columns,function(col,index){
					rowResult[col] = row[col]
				});
				result.push(row[col]); 
			});

			return result;
		},
		
		'from' : function(table){
			q.table.push(table);
			return table;
		}

};


module.exports = q;
