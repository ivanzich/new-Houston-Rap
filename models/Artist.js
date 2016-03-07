//require mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Album = require('../models/Album')

// embedding data for album in artist
// var AlbumSchema = new Schema({
//     name: String,
//     yearReleased: String,
//     songCount: Number,
//     albumCover: String
// });

var ArtistSchema = new Schema({
    name: String,
    albums: [Album.schema],
    bio: String,
    photo_url: String,
    createdAt: {type: Date, default: new Date()}
});

var Artist = mongoose.model("Artist", ArtistSchema);

// export
module.exports = Artist;
