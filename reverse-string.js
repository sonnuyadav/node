var fs = require('fs');
var reverse = require('reverse_string');
var read = require('read-file');
 const comand = process.argv[2];
// var reverseString = reverse(url);
// console.log(reverseString);


fs.writeFile("test.txt", comand, function(err) {
    read('test.txt', {encoding: 'utf8'}, function(err, buffer) {
        //console.log(buffer); 
        var reverseString = reverse(buffer);
         console.log(reverseString);
      });
    
});

