//require mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Album = require('../models/Album')

// embedding data for album in artist
var AlbumSchema = new Schema({
    name: String,
    yearReleased: String,
    songCount: Number
});

var ArtistSchema = new Schema({
    name: String,
    Album: [AlbumSchema],
    bio: String,
    photo_url: String,
    createdAt: {type: Date, default: new Date()}
});

var Artist = mongoose.model("Artist", ArtistSchema);

// export
module.exports = Artist;
