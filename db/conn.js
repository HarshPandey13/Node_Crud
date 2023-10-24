const mongoose = require('mongoose')

const db = process.env.DATABASE

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("DataBase Connected")
}).catch((error) => {
    console.log(error)
})