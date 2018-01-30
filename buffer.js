var fs = require('fs');
var reverse = require('reverse_string');
var read = require('read-file');
var reverse = require("buffer-reverse")
 const comand = process.argv[2];
// var reverseString = reverse(url);
// console.log(reverseString);

fs.writeFile("test.txt", comand, function(err) {
    read('test.txt', function(err, buffer) {
      // console.log(buffer);
      console.log(reverse(buffer)); 
     
    
    });
    
});

