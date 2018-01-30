const request = require('request');
const Jimp = require("jimp");
const fs = require('fs');
const getVal = process.argv;
var searchString ='';
function jimpCall(img){
    if(img !=""){
    Jimp.read(img, function (err, lenna) {
        if (err) throw err;
        lenna.resize(256, 256)            // resize 
             .quality(60)                 // set JPEG quality 
             .greyscale()                 // set greyscale 
             .write('./uploades/bw/'+img+'.jpg'); // save 
    });
}
}
for(i=2; i<getVal.length;i++){
    searchString +=getVal[i]+' ';
    
}
request('https://www.google.co.in/search?q='+searchString+'&dcr=0&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjAqvi4r_LYAhVCso8KHYJaA5UQ_AUICigB&biw=1366&bih=662', function (error, response, body) {
    var download = function(uri, filename, callback){
          jimpCall(filename);
        
         request.head(uri, function(err, res, body){
          console.log('content-type:', res.headers['content-type']);
          console.log('content-length:', res.headers['content-length']);
         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
      };
        var matches = body.match(/src\s*=\s*"(.+?)"/g);
        for(i=0; i<getVal['3']; i++){
            var matched = matches[i];
            if(matches[i].slice(5,-1).indexOf("https" || "http") == 0 ) {
                var img = './uploades/'+searchString+'-'+i+'.jpg';
                download(matches[i].slice(5,-1), './uploades/'+searchString+'-'+i+'.jpg', function(state){
               });
            } else {
                console.log("No no no!");
            }
        }
    });


