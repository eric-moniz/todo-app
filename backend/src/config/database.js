// configuração do mongodb
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose
    .connect('mongodb://127.0.0.1:27017/todo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch(err => console.error(err));
