const mongoose = require("mongoose")

const Message = mongoose.model(
    "Message",
    new mongoose.Schema({},
    {
        timestamps: true, strict:false
    })
)



module.exports = {
    Message
}