var Scraper = require ('images-scraper')
  , google = new Scraper.Google();
  const request = require('request');
  const fs = require('fs');
  const Jimp = require("jimp");
  var imageBW = 'bw/'  
 var keyword = process.argv[2];
 var num = process.argv[3];
var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
//for image black and white
function jimpCall(img){
    if(img !=""){
    Jimp.read(img, function (err, lenna) {
        if (err) throw err;
        lenna.resize(256, 256)            // resize 
             .quality(60)                 // set JPEG quality 
             .greyscale()                 // set greyscale 
             .write('./upload/bw/'+img); // save 
    });
}
}

google.list({
    keyword: keyword,
    num: num,
    detail: true,
    nightmare: {
    show: false
    }
})
.then(function (res) {
    var counter=0;
    res.forEach(function(item){
     
    var image = 'upload/large/'+keyword+''+counter+'.jpg';    
    var thumb = 'upload/thumb/'+keyword+''+counter+'.jpg';    
    
    download(item.url, image, function(){
       jimpCall(image);
    });
   download(item.thumb_url, thumb, function(){
    jimpCall(thumb);
   });
   counter ++;
});
}).catch(function(err) {
    console.log('err', err);
});
 
// you can also watch on events 
google.on('result', function (item) {
    console.log('out', item);
});

