/**
 * Created by James Murphree on 6/4/2017.
 */
var MySql = function () {
    var _that = this,
        _mysql = require('mysql'),
        _connection = _mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "toor"
        }),
        _defaultErrorFunction = function (error) {
            console.log(error);
            throw "Mysql Error";
        };

    return {
        query: function (sql, resultFunction, errorFunction) {
            errorFunction = errorFunction || _defaultErrorFunction;
            _connection.query(sql, function(error, result) {
                if (error) { errorFunction(error); }
                else {
                    resultFunction(result);
                    console.log("query success");
                }
            });
        }
    };
};

module.exports = MySql();