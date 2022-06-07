const mongoose = require("mongoose")

const Message = mongoose.model(
    "Message",
    new mongoose.Schema({
        data: Array
    },
    {
        timestamps: true,
    })
)



module.exports = {
    Message
}