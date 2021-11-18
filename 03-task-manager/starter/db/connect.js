const mongoose = require('mongoose')

// user password: Cb3UcigBJxiu1owT

const connectDB = (url) => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
}

module.exports = connectDB
