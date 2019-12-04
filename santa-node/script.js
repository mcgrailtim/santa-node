const fs = require('fs');

let floor = 0;
fs.readFile('./steps.txt', (err, data) => {
	for (const ch in data){
		floor+=1;}
 //  		if (ch.toString() === '(') {
 //  			floor+=1;
 //  			console.log('plus 1', Number(floor));
 //  		}
 //  		else{
 //  			floor-=1;
 //  			console.log('minus 1', Number(floor));
 //  		}
	// }

	console.log('final floor:',floor);
})