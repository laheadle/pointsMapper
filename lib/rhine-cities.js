
//(function() { var m = []; $('.multicol:nth-child(31) a').each(function() { m.push($(this).attr("title")); }); return m; }) ()

var cities = ["Basel", "Strasbourg", "Karlsruhe", "Mannheim", "Ludwigshafen", "Wiesbaden", "Mainz", "Koblenz", "Bonn", "Cologne", "Leverkusen", "Neuss", "Düsseldorf", "Krefeld", "Uerdingen", "Duisburg", "Arnhem", "Nijmegen", "Utrecht (city)", "Rotterdam", "Chur", "Schaffhausen", "Konstanz", "Breisach", "Speyer", "Worms, Germany", "Bingen am Rhein", "Rudesheim am Rhein", "Neuwied", "Andernach", "Bad Honnef", "Konigswinter", "Niederkassel", "Wesseling", "Dormagen", "Zons", "Monheim am Rhein", "Wesel", "Xanten", "Emmerich am Rhein", "Zutphen", "Deventer", "Zwolle", "Kampen (Overijssel)"];

$(function() {
    var mb = new MapBrowser({mapId: "map_canvas",  numColumns: 3, zoom: 8, points: cities});
    mb.render();
});
