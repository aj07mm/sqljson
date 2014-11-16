var q = {
		'table' : [],
		'setTableData': function(data){
			this.table.push(data);
		},
		'select' : function(columns){

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
		'from' : function(tableData){
			this.setTableData(tableData);
			return this;
		}

};


module.exports = q;