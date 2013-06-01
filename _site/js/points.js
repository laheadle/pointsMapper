
var MIN_HOVER_TIME = 1250;

// e.g. new MapBrowser({mapId: "map_canvas",  numColumns: 2, zoom: 10, points: cities});
window.MapBrowser = function (args) {

    _.extend(this, args);

    this.columnsize = Math.round(this.points.length / this.numColumns);
    this.points.sort();
    this.geocoder = new google.maps.Geocoder();


    this.showDistance = function(point1, title1, point2, title2) {
	var callback = function(response, status) { 
	    if (status == google.maps.DistanceMatrixStatus.OK) {
		var origins = response.originAddresses;
		var destinations = response.destinationAddresses;

		for (var i = 0; i < 1;i++) {
		    // origins.length; i++) {
		    var results = response.rows[i].elements;
		    for (var j = 0; j < 1;j++){//results.length; j++) {
			var element = results[j];
			var distance = element.distance.text;
			var duration = element.duration.text;
			var from = origins[i];
			var to = destinations[j];
			$('#messages').text('from ' + title1 + ' to ' + title2 + ' distance: ' + distance + ' time: ' + duration); 
		    }
		}
	    }
	};
	var service = new google.maps.DistanceMatrixService();
	service.getDistanceMatrix(
	    {
		origins: [point1],
		destinations: [point2],
		travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.IMPERIAL,
		avoidHighways: false,
		avoidTolls: false
	    }, callback);

    };

    this.showPoint = function(point, title) {
	var myOptions = {
	    zoom: this.zoom || 12,
	    center: point,
	    mapTypeId: google.maps.MapTypeId.TERRAIN
	}
	if (!this.map) {
	    this.map = new google.maps.Map(document.getElementById(this.mapId), myOptions);
	}
	if (this.marker && !this.persistMarkers) {
	    this.marker.setMap(null);
	}
	this.oldMarker = this.marker;
	this.oldTitle = this.title;
	this.title = title;
	this.marker = new google.maps.Marker({
	    position: point,
	    map: this.map,
	    title: title
	});
	if (this.oldMarker) {
	    this.showDistance(this.oldMarker.getPosition(), this.oldTitle, point, title);
	}
	this.map.panTo(point);
    };

    this.render = function() {
	var j = 0;

	// makes a no-arg closure to show a point (for event handlers)
	var mkShowPointFun = function(point) { return function(){
	    that.geocoder.geocode( { 'address': point}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
		    that.showPoint(results[0].geometry.location, point);
		}});
	}};

	for (var i =0;i < this.points.length;i++) {
	    if (i % this.columnsize == 0) {
		$('#left').append($('<ul>').attr({'id': 'list'+(++j), 'class': 'list'}));
	    }
	    var point = this.points[i];
	    var li = $('<li>').attr('id', point);

	    var that = this;
	    li.hoverIntent({out: function() {}, 
			    over: mkShowPointFun(point),
			    timeout: MIN_HOVER_TIME});
	    var searchtxt = encodeURIComponent(point);
	    li.append($('<p>').append($('<a>').attr('href', 'http://www.google.com/search?q='+searchtxt).text(point)));
	    $('#list'+j).append(li);
	}
	if (this.points.length > 0) {
	    mkShowPointFun(this.points[0])();
	}
    };

};


