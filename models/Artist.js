//require mongoose
var mongoose = require('mongoose');

<<<<<<< HEAD
var ArtistSchema = new mongoose.Schema({
||||||| merged common ancestors

var ArtistSchema = new mongoose.Schema({
=======
var Schema = mongoose.Schema;
var Album = require('../models/Album')

// embedding data for album in artist
var AlbumSchema = new Schema({
>>>>>>> master
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
