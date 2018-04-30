var fs = require("fs");

var filePath = "./tmp/test_sync.txt";
var fileData = "Testing synchronous file write";

// fs.writeFileSync(filePath, fileData, function(err){
// 	if (err) {
// 		return console.log(err);
// 	}
// 	console.log("successfully wrote to", filePath);
// });


// fs.open(filePath, 'r', function(err, data){

// 	if (err) {
// 		return console.log(err)
// 	}
// 	console.log(data);
// })

fs.readFile(filePath, 'utf8', function(err, data){

	if (err) {
		return console.log(err)
	}
	console.log(data);
})