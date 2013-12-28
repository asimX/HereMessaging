exports.definition = {
    config: {
        columns: {
            time: "datetime",
            lat: "double",
            "long": "double",
            fromUID: "double",
            toUID: "double",
            message: "varchar"
        },
        adapter: {
            type: "sql",
            collection_name: "mentions"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("mentions", exports.definition, []);

collection = Alloy.C("mentions", exports.definition, model);

exports.Model = model;

exports.Collection = collection;