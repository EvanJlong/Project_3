const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema to log the Kudos//
var ProjectSchema = new Schema({
    building_type: String,
    address: String,
    owner_developer: String,
    percent_completed: Number,
    current_bid:Number,
    status: String,
    geo_lat: Number,
    geo_long: Number
})

const building = mongoose.model('building', ProjectSchema);

module.exports = building;