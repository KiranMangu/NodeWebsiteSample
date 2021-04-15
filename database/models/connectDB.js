const mongoose = require('mongoose');

module.exports = {
    connect: () => {
        mongoose.connect(
            "mongodb+srv://kiranmohanm:Mongodb@cluster0.losyo.mongodb.net/blog?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );
    }
}