/**
 * Created by James Murphree on 6/4/2017.
 */

var User = function(user) {
    if (user === undefined) {
        return undefined;
    }

    var _that = this,
        _firstName = user.name.givenName,
        _lastName = user.name.familyName,
        _id = user.id;

    return {
        getFirstName: function () { return _firstName; },
        getLastName: function () { return _lastName; },
        getId: function () { return _id; },
        getData: function () {
            return {
                firstName: _firstName,
                lastName: _lastName,
                id: _id
            };
        }
    }
};

module.exports = User;