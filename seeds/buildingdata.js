const mongoose = require('mongoose');
const building = require ('../models/buildings')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/login_demo_db");

building.insertMany([
    {

        "building_type" : "Residential Luxury Bldg.",
        "address" : "9600 Valley Rd.",
        "owner_developer" : "Jackson Shaw",
        "current_bid" : 65000000,
        "status" : "Bid Phase",
        "geo_lat" : 32.111,
        "geo_long" : -96.213,
    },
    {

        "building_type" : "Commercial Office Bldg",
        "address" : "1325 Downtown Road",
        "owner_developer" : "JNT Developers",
        "current_bid" : 320000000,
        "status" : "Bid Phase",
        "geo_lat" : 33.411,
        "geo_long" : -95.219,
        "__v" : 0
    },
    {

        "building_type" : "Commercial High-Rise",
        "address" : "4130 Main Street",
        "owner_developer" : "BigData Construction",
        "current_bid" : 42000000,
        "status" : "Sold",
        "geo_lat" : 32.933,
        "geo_long" : -96.422,

    },
    {

        "building_type" : "Small Building",
        "address" : "4100 Carrey Lane",
        "owner_developer" : "BHB Developers",
        "current_bid" : 13000000,
        "status" : "Bid Phase",
        "geo_lat" : 32.199,
        "geo_long" : -96.198,

    },
    {

        "building_type" : "Tower",
        "address" : "9600 Regent Blvd.",
        "owner_developer" : "TekSystems",
        "current_bid" : 80000000,
        "status" : "Bid Phase",
        "geo_lat" : 32.7766642,
        "geo_long" : -96.7969879,

    },




]);