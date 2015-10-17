var sqljson = {

    table: [],
    columns: [],
    result: [],

    select: function(_columns) {
        var _result = [];

        if(! _.isArray(_columns) ) {
            throw 'columns must be an array';
        }

        sqljson.columns = [];

        _.each(_columns, function(element) {
            if(_.isString(element))
                sqljson.columns.push(element);
            else
                throw 'the element ' + element.toString() + ' is not a string';
        });

        return this;
    },

    from: function(_table) {
        sqljson.table = [];

        if(! _.isArray(_table) ) {
            throw 'table must be an array';
        }

        _.each(_table, function(element) {
            if(_.isObject(element))
                sqljson.table.push(element);
            else
                throw 'the element ' + element.toString() + ' is not a object';
        });

        return this;
    }

};