var mongoose = require('mongoose');

//define nerd model
module.exports = mongoose.model('Nerd', {
    name: {type: String, default: ''}
});