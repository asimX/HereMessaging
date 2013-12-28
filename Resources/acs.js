function login(params, callback) {
    Cloud.Users.login({
        login: params.uname,
        password: params.pwd
    }, function(e) {
        if (e.success) {
            var user = e.users[0];
            APP.user.uname = user.first_name;
            Ti.App.Properties.setString("uname", user.first_name);
            APP.user.id = user.id;
            Ti.API.info("after Login in success APP.user.id = " + APP.user.id);
            Ti.App.Properties.setString("uid", user.id);
            APP.user.sessionID = e.meta.session_id;
            Ti.App.Properties.setString("sessionID", e.meta.session_id);
            Ti.API.info("session id:  " + e.meta.session_id);
            APP.user.email = user.email;
            Ti.App.Properties.setString("email", user.email);
            callback && callback(APP.user.id);
        } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
    });
}

var LOCATION = require("location");

var APP = require("core");

var Cloud = require("ti.cloud");

exports.registerUser = function(params, callback) {
    Cloud.Users.create({
        email: params.username,
        password: params.pwd,
        password_confirmation: params.pwd
    }, function(e) {
        if (e.success) {
            var user = e.users[0];
            APP.user.uname = user.custom_fields.displayName;
            Ti.App.Properties.setString("uname", user.custom_fields.displayName);
            APP.user.id = user.id;
            Ti.API.info("after Login in success APP.user.id = " + APP.user.id);
            Ti.App.Properties.setString("uid", user.id);
            APP.user.sessionID = e.meta.session_id;
            Ti.App.Properties.setString("sessionID", e.meta.session_id);
            Ti.API.info("session id:  " + e.meta.session_id);
            APP.user.email = user.email;
            Ti.App.Properties.setString("email", user.email);
            callback && callback({
                success: true
            });
        } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
    });
};

exports.updateUser = function(params, callback) {
    Cloud.Users.update({
        username: params.username,
        custom_fields: {
            displayName: params.username
        }
    }, function(e) {
        var thisUser = e.users[0];
        if (e.success) {
            Ti.API.info("displayName:  " + thisUser.custom_fields.displayName);
            Ti.App.Properties.setString("uname", thisUser.custom_fields.displayName);
            APP.user.uname = thisUser.displayName;
            callback && callback({
                success: true
            });
        } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
};

exports.alreadyExit = function(params, callback) {
    if (!params.search.value.length) {
        params.search.focus();
        return;
    }
    Cloud.Users.search({
        q: params.search.value
    }, function(e) {
        e.success ? 0 == e.users.length ? callback({
            exists: false
        }) : callback({
            exists: true
        }) : alert(error(e));
    });
};

exports.showMe = function(callback) {
    Cloud.Users.showMe(function(e) {
        if (e.success) {
            var user = e.users[0];
            alert("Success:\\nid: " + user.id + "\\n" + "first name: " + user.first_name + "\\n" + "last name: " + user.last_name);
        } else APP.user.isLoggedIn = false;
        callback();
    });
};

exports.logout = function() {
    Cloud.Users.logout(function(e) {
        if (e.success) {
            alert("Success: Logged out");
            Cloud.sessionId = null;
            Ti.App.Properties.setString("sessionID", null);
        } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
    });
};

exports.getOtherUser = function(id, obj) {
    Cloud.Users.show({
        user_id: id
    }, function(e) {
        e.success ? obj.text = e.users[0].first_name : error(e);
    });
};

exports.getOtherPeople = function(id, callback) {
    Cloud.Users.query({
        per_page: 10
    }, function(e) {
        e.success ? callback(e.users) : error(e);
    });
};

exports.getPlace = function(_lon, _lat, callback) {
    Cloud.Places.query({
        order: "-created_at",
        where: {
            lnglat: {
                $nearSphere: [ _lon, _lat ],
                $maxDistance: 26e-5
            }
        }
    }, function(e) {
        Ti.API.info(JSON.stringify(e));
        Ti.API.info("e.success:   " + e.success);
        e.success ? 0 == e.places.length || callback(e) : error(e);
    });
};

exports.saveMention = function(params, callback) {
    Ti.API.info("sessionID from saveMention Fn:  " + APP.user.sessionID);
    Ti.API.info("session ID from hasStoredSession: " + Cloud.sessionId);
    Cloud.Objects.create({
        classname: "mentions",
        fields: {
            mentionTxt: params.mentionTxt,
            toUID: params.toUID,
            fromUID: params.fromUID,
            placeID: params.placeID,
            type: params.type
        }
    }, function(e) {
        if (e.success) {
            var mention = e.mentions[0];
            Ti.API.info("Success:\\nid: " + mention.id + "\\n" + "mentionTxt: " + mention.mentionTxt + "\\n" + "toUID: " + mention.toUID + "\\n" + "fromUID: " + mention.fromUID + "\\n" + "placeID: " + mention.palceID);
        } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
        callback();
    });
};

exports.updateFname = function(param, callback) {
    Cloud.Users.update({
        first_name: param.fname
    }, function(e) {
        if (e.success) {
            var user = e.users[0];
            APP.user.uname = user.first_name;
            Ti.App.Properties.setString("uname", user.first_name);
            alert("Update Success you name is :" + user.first_name);
        } else alert("Error:\\n" + (e.error && e.message || JSON.stringify(e)));
        callback();
    });
};

exports.getPosts = function(_lon, _lat, callback) {
    var maxDistance = 1 / 3959;
    Cloud.Posts.query({
        order: "-created_at",
        per_page: 10,
        where: {
            coordinates: {
                $nearSphere: [ _lon, _lat ],
                $maxDistance: maxDistance
            }
        }
    }, function(e) {
        if (e.success) if (0 == e.posts.length) alert("No post found!"); else {
            Ti.API.info("All post result = " + JSON.stringify(e.posts));
            callback(e.posts);
        } else error(e);
    });
};

exports.savePost = function(param, callback) {
    Cloud.Posts.create({
        content: param.content,
        custom_fields: {
            coordinates: [ param.lng, param.lat ]
        }
    }, function(e) {
        alert("Post Saved. PostID is: " + e.posts[0].id);
        callback();
    });
};

exports.getMentions = function(objType, _lon, _lat, placeID, callback) {
    Cloud.Objects.query({
        classname: objType,
        order: "-created_at",
        per_page: 20,
        where: {
            type: "public",
            placeID: placeID
        }
    }, function(e) {
        if (e.success) {
            var objects = e[objType];
            if (objects.length) {
                Ti.API.info("All mentions result = " + JSON.stringify(objects));
                callback(objects);
            } else alert("No objects found!");
        } else error(e);
    });
};

exports.getMyMentions = function(id, val, _lon, _lat, place_id, callback) {
    Cloud.Objects.query({
        classname: val,
        per_page: 10,
        order: "-created_at",
        where: {
            toUID: id,
            type: "public",
            placeID: place_id
        }
    }, function(e) {
        if (e.success) {
            var objects = e[val];
            if (objects.length) {
                Ti.API.info("Get my mentions = " + JSON.stringify(objects));
                callback(objects);
            } else ;
        } else error(e);
    });
};

exports.getMyPrivates = function(id, objType, _lon, _lat, placeID, callback) {
    Cloud.Objects.query({
        classname: objType,
        per_page: 10,
        order: "-created_at",
        where: {
            toUID: id,
            type: "private",
            placeID: placeID
        }
    }, function(e) {
        if (e.success) {
            var objects = e[objType];
            if (objects.length) {
                Ti.API.info("Get my privates = " + JSON.stringify(objects));
                callback(objects);
            } else ;
        } else error(e);
    });
};

exports.currentUserMention = function(val, id, clb) {
    Cloud.Objects.query({
        classname: val,
        where: {
            toUID: id
        }
    }, function(e) {
        if (e.success) {
            var objects = e[val];
            objects.length && (clb = objects.length);
        } else error(e);
    });
};

exports.Checkin = function(id, param, callback) {
    Cloud.Checkins.create({
        place_id: id,
        custom_fields: {
            checked_out: false
        }
    }, function(e) {
        if (e.success) {
            Ti.API.info("Checkin retured CALLBACK:  " + JSON.stringify(e));
            var str = e.checkins[0].place.created_at;
            APP.user.checkin.id = e.checkins[0].id;
            APP.user.checkin.placeID = e.checkins[0].place.id;
            APP.user.checkin.placeName = e.checkins[0].place.name;
            Ti.App.Properties.setString("placeID", e.checkins[0].place.id);
            Ti.App.Properties.setString("checkInID", e.checkins[0].id);
            Ti.App.Properties.setString("timeAppeared", str.substr(11, 8));
            Ti.App.Properties.setString("placeName", e.checkins[0].place.name);
            LOCATION.addLocationListener();
            callback(e);
        } else callback(e);
    });
};

exports.getCheckin = function(id, param) {
    Cloud.Checkins.query({
        where: {
            user_id: id
        },
        order: "-created_at",
        per_page: 1,
        limit: 1
    }, function(e) {
        if (e.checkins[0]) if (param) {
            var str = e.checkins[0].place.created_at;
            param.appear ? param.appear.text = str.substr(11, 8) : "";
            param.location.text = e.checkins[0].place.name;
        } else {
            APP.user.checkin.id = e.checkins[0].id;
            APP.user.timeAppeared = e.checkins[0].place.created_at.substr(11, 8);
            APP.user.checkin.placeName = e.checkins[0].place.name;
            APP.user.checkin.placeID = e.checkins[0].place.id;
        }
    });
};

exports.getloction = function(id, callback) {
    Cloud.Checkins.query({
        order: "-created_at",
        per_page: 1,
        limit: 1,
        where: {
            user_id: id
        }
    }, function(e) {
        if (e.checkins[0]) {
            Ti.API.info("Getlocation  = " + JSON.stringify(e.checkins[0]));
            callback(e.checkins[0]);
        }
    });
};

exports.ottieniVia = function(latitude, longitude, _cb) {
    Titanium.Geolocation.reverseGeocoder(latitude, longitude, function(evt) {
        Ti.API.info("reverse geolocation result = " + JSON.stringify(evt));
        _cb(evt);
    });
};

exports.uploadPic = function(param, callback) {
    Cloud.Photos.create({
        photo: param.photo,
        "photo_sync_sizes[]": "small_75"
    }, function(e) {
        if (e.success) {
            Ti.API.info("upload image result = " + JSON.stringify(e));
            var photos = e.photos[0];
            callback && callback(photos);
            photo = null;
        } else error(e);
    });
};

exports.getProfilePic = function(id, callback) {
    Cloud.Photos.query({
        per_page: 1,
        where: {
            user_id: id
        },
        order: "-created_at"
    }, function(e) {
        if (e.success) {
            var photo = e.photos[0];
            callback ? callback(photo) : APP.user.pic = photo.urls.square_75;
        } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
};

exports.getAppears = function(id, callback) {
    Cloud.Checkins.query({
        per_page: 1e3,
        where: {
            user_id: id
        },
        order: "-created_at"
    }, function(e) {
        if (e.success) if (0 == e.checkins.length) ; else {
            callback(e.checkins);
            Ti.API.info("Get Appears Arounds =" + JSON.stringify(e));
        } else error(e);
    });
};

exports.getParticularAppears = function(id, placeID, callback) {
    Cloud.Checkins.query({
        per_page: 1e3,
        where: {
            user_id: id,
            place_id: placeID
        },
        order: "-created_at"
    }, function(e) {
        if (e.success) if (0 == e.checkins.length) ; else {
            callback(e.checkins);
            Ti.API.info("Get particular appears =" + JSON.stringify(e));
        } else error(e);
    });
};

exports.checkAppearance = function(_lon, _lat, callback) {
    Cloud.Places.query({
        per_page: 1,
        where: {
            lnglat: {
                $nearSphere: [ _lon, _lat ],
                $maxDistance: 26e-5
            }
        }
    }, function(e) {
        Ti.API.info("checkAppearance :" + JSON.stringify(e));
        e.success && (0 == e.places.length || callback(e.places[0]));
    });
};

exports.getPlaces = function(callback) {
    Ti.API.info("getPlaceAround 1 :" + APP.coordinates.lng + " " + APP.coordinates.lat);
    Here.services_queryUpdatePlaces({
        lng: APP.coordinates.lng,
        lat: APP.coordinates.lat,
        maxDistance: APP.config.maxDistance
    }, function(data) {
        Ti.API.info("Response from ACSNode:  " + JSON.stringify(data));
        callback(data);
    });
};

exports.checkIfAlreadyMentioned = function(val, id, callback) {
    Cloud.Objects.query({
        classname: val,
        where: {
            toUID: id
        }
    }, function(e) {
        if (e.success) {
            var objects = e[val];
            objects.length ? callback("Active") : callback("Inactive");
        } else error(e);
    });
};

exports.isResponded = function(val, fromUID, toUID, callback) {
    Cloud.Objects.query({
        classname: val,
        where: {
            fromUID: fromUID,
            toUID: toUID
        }
    }, function(e) {
        if (e.success) {
            var objects = e[val];
            objects.length ? callback("replied") : callback("noReply");
        } else error(e);
    });
};

exports.prettyDate = function(date_str) {
    var time_formats = [ [ 60, "just now", 1 ], [ 120, "1 minute ago", "1 minute from now" ], [ 3600, "minutes", 60 ], [ 7200, "1 hour ago", "1 hour from now" ], [ 86400, "hours", 3600 ], [ 172800, "yesterday", "tomorrow" ], [ 604800, "days", 86400 ], [ 1209600, "last week", "next week" ], [ 2419200, "weeks", 604800 ], [ 4838400, "last month", "next month" ], [ 29030400, "months", 2419200 ], [ 58060800, "last year", "next year" ], [ 290304e4, "years", 29030400 ], [ 580608e4, "last century", "next century" ], [ 580608e5, "centuries", 290304e4 ] ];
    var time = ("" + date_str).replace(/-/g, "/").replace(/[TZ]/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    "." == time.substr(time.length - 4, 1) && (time = time.substr(0, time.length - 4));
    var seconds = (new Date() - new Date(time)) / 1e3;
    var token = "ago", list_choice = 1;
    if (0 > seconds) {
        seconds = Math.abs(seconds);
        token = "from now";
        list_choice = 2;
    }
    var format, i = 0;
    while (format = time_formats[i++]) if (format[0] > seconds) return "string" == typeof format[2] ? format[list_choice] : Math.floor(seconds / format[2]) + " " + format[1] + " " + token;
    return time;
};

exports.alertNewPost = function() {};

exports.timeDifference = function(current, previous) {
    var msPerMinute = 6e4;
    var msPerHour = 60 * msPerMinute;
    var msPerDay = 24 * msPerHour;
    var msPerMonth = 30 * msPerDay;
    var msPerYear = 365 * msPerDay;
    var elapsed = current - previous;
    return msPerMinute > elapsed ? Math.round(elapsed / 1e3) + " sec" : msPerHour > elapsed ? Math.round(elapsed / msPerMinute) + " m" : msPerDay > elapsed ? Math.round(elapsed / msPerHour) + " h" : msPerMonth > elapsed ? Math.round(elapsed / msPerDay) + " d" : msPerYear > elapsed ? Math.round(elapsed / msPerMonth) + " month" : Math.round(elapsed / msPerYear) + " y";
};

exports.distance = function(lat1, lon1, lat2, lon2) {
    var R = 3959;
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    if (d > 1) return Math.round(d);
    if (1 >= d) return Math.round(1e3 * d) + "mi";
    return d;
};

exports.getAllUpdates = function(callback) {
    Ti.API.info("placeID: " + APP.user.placeID);
    Ti.API.info("lng: " + APP.coordinates.lng);
    Ti.API.info("lat: " + APP.coordinates.lat);
    Here.services_getHomeScreenData({
        placeID: APP.user.placeID,
        classname: "mentions",
        lng: APP.coordinates.lng,
        lat: APP.coordinates.lat,
        maxDistance: APP.config.maxDistance
    }, function(data) {
        Ti.API.info("Response from ACSNode:  " + JSON.stringify(data));
        callback(data);
    });
};

exports.init = function() {
    Cloud.Objects.query({
        classname: "AppParams",
        order: "-created_at",
        per_page: 20
    }, function(e) {
        Ti.API.info("AppParams Full Response: " + JSON.stringify(e));
    });
};

exports.getTips = function(callback) {
    Cloud.Objects.query({
        classname: "tips"
    }, function(e) {
        Ti.API.info("TIPS:  " + JSON.stringify(e.tips[0]));
        callback(e.tips[0]);
    });
};

exports.login = login;