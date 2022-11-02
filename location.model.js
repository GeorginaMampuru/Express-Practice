const mongoose = require("mongoose")

const {Schema} = mongoose;

const locationSchema = new Schema(
    {
        longitude: {type: String},
        latitude: {type: String},
    },
    {
        timestamps: true
    }
)

exports.Location = mongoose.models.Location || mongoose.model("Location", locationSchema);