var jade = require('jade'),
fs = require('fs');

var fnames = ['bay-area-cities', 'big-california-cities', 'rhine-cities', 'east-bay-nature-sites'];

for (var i = 0;i< fnames.length;i++) {
    var fname = './'+fnames[i]+'.jade';
    var str = fs.readFileSync(fname, 'utf8');
    var txt = jade.compile(str, {filename: fname})();
    fs.writeFile('./_site/'+fnames[i]+'.html', txt);
}


