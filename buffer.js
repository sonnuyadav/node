var fs = require('fs');
var reverse = require('reverse_string');
var read = require('read-file');
var reverse = require("buffer-reverse")
 const comand = process.argv[2];
 const num = process.argv[3];
// var reverseString = reverse(url);
// console.log(reverseString);
fs.writeFile("test.txt", comand, function(err) {
 read('test.txt', function(err, src) {
  for(i=1; i<=num ; i++){
  var buffer = new Buffer(src.length);
    for (var k = 0, j = src.length - 1; k <= j; ++k, --j) {
      buffer[k] = src[j]
      buffer[j] = src[k]
    }
    src = buffer;
    console.log(buffer.toString('utf8'));
   fs.appendFile("test.txt",'\n'+ buffer.toString('utf8'), function(err) {
     
   });
  }
  });
});

