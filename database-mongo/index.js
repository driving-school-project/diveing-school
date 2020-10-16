var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rbk', {
  useMongoClient: true,

});

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  email: String,
  password: String
});

var user = mongoose.model('user', userSchema);

var studentSchema = mongoose.Schema({
  username: { type: String, unique: true },
  idcard: String,
  result: String
});

var student = mongoose.model('student', studentSchema);



var createStudent = function (data, callback) {
  student.create(data, (err, dat) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, dat)
    }

  })
}

var create = function (data, callback) {
  user.create(data, (err, dat) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, dat)
    }

  })
}



var updateOne = function (filter, update, callback) {
  user.findOneAndUpdate(filter, update, (err, dat) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, dat)
    }
  })
}

var removeOne = function (filter, remove, callback) {
  user.findOneAndRemove(filter, remove, (err, dat) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, dat)
    }
  })
}


module.exports.create = create;
module.exports.updateOne = updateOne;
module.exports.removeOne = removeOne;
module.exports.createStudent = createStudent;
