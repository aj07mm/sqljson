test('select(columns) from(table)', function() {

    var _selectColumns = ['id','title'],
        _table = [{'id':'10', 'title':'Money for Nothing'}];

    sqljson.select(_selectColumns).from(_table);

    equal(sqljson.table.length, 1, 'table should contain a record');

});

test('Passing invalid columns', function() {

    var _selectColumns = [null,{id:10}];

    throws(function() { sqljson.select(_selectColumns) }, 'the element null is not a string', 'throws a exception');

});

test('Passing invalid table', function() {

    var _selectColumns = ['id','title'],
        _table = [null];

    throws(function() { sqljson.select(_selectColumns).from(_table) }, 'the element null is not a object', 'throws a exception');

});