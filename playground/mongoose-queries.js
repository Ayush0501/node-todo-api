const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b538ba7b8eaf3bc263c588c';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5b533ff029a1c51c0c573a05';

User.findById(id).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log('User by Id', user);
}).catch((e) => console.log(e));