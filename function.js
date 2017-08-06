// Kodilla way
var female = ['Ana', 'Isabel', 'Caroline', 'Kate'];
var male = ['Jacob', 'Peter', 'Mathew', 'Ben'];
var mergedArrays = female.concat(male);
console.log(mergedArrays);
var newPerson = 'Ingrid';
if (mergedArrays.indexOf(newPerson) === -1) {
	mergedArrays.push(newPerson)
	console.log('Name ' + newPerson + ' has been added and now the result is ' + mergedArrays);
} else {
	console.log('Name' + newPerson + 'already exists');
};

//my way
var female = ['Ana', 'Isabel', 'Caroline', 'Kate'];
var male = ['Jacob', 'Peter', 'Mathew', 'Ben'];
var mergedArrays = female.concat(male);
var newPerson = 'Ingrid';
for (i = 0; i < mergedArrays.length; i++) {
	if (i == newPerson) {
		break;
	} else {
		mergedArrays.push(newPerson);
		break;
	};
};		
console.log(mergedArrays);
