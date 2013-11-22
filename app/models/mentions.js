exports.definition = {
	config: {
		columns: {
		    "time": "datetime",
		    "lat":  "double",
		    "long": "double",
		    "fromUID": "double",
		    "toUID":   "double",
		    "message":  "varchar"
		},
		adapter: {
			type: "sql",
			collection_name: "mentions"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

