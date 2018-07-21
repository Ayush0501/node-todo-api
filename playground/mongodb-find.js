// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5b524f39c75e2a10a85eb79b')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos Count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch', err);
	// });


	db.collection('Users').find({name: 'Ayush'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch', err);
	});


	db.close();
});