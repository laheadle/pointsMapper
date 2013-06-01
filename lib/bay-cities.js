
var cities = ["san francisco, ca","san jose, ca", "san leandro, ca", "oakland, ca", "pleasanton, ca",
	      "pittsburg, ca", "martinez, ca", "concord, ca", "benicia, ca", "vallejo, ca"
	      , "larkspur, ca", "el cerrito, ca", "brentwood, ca", "danville, ca", "livermore, ca", "fremont, ca", "milpitas, ca", "fairfield, ca",
	      "vacaville, ca", "hayward, ca", "union city, ca", "cupertino, ca", "mountain view, ca", "palo alto, ca", "antioch, ca",
	      "sunnyvale, ca", "santa clara, ca", "morgan hill, ca", "gilroy, ca", "petaluma, ca", "santa rosa, ca", "campbell, ca",
	      "pacifica, ca", "san carlos, ca", "milbrae, ca", "los gatos, ca", "saratoga, ca", "woodside, ca", "los altos, ca",
	      "half moon bay, ca", "alameda, ca", "richmond, ca", "menlo park, ca", "belmont, ca", "san mateo, ca", "burlingame, ca"
	      , "south san francisco, ca", "walnut creek, ca", "san ramon, ca", "tracy, ca", "newark, ca", "dublin, ca", "daly city, ca", "sausalito, ca"
	      , "san rafael, ca", "novato, ca", "napa, ca", "sonoma, ca", "san bruno, ca"];

$(function() {
    var mb = new MapBrowser({mapId: "map_canvas",  numColumns: 2, zoom: 12, points: cities});
    mb.render();
});
