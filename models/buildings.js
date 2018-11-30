const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema to log the Kudos//
var ProjectSchema = new Schema({
    building_type: String,
    address: String,
    owner_developer: String,
    cost: Number,
    percent_completed: Number,
    estimated_completion : Date,
    status: String,
    geo_lat: Number,
    geo_long: Number
})

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;