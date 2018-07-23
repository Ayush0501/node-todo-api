const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// findOneAndRemove

// Todo.findByIdAndRemove('5b55c81d93d7351d17791c51').then((doc) => {
// 	console.log(doc);
// });