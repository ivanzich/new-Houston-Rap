//require mongoose
var mongoose = require('mongoose');

var ArtistSchema = new mongoose.Schema({
    name: String,
    album: String,
    bio: String,
    photo_url: String,
    createdAt: {type: Date, default: new Date()}
})

var Artist = mongoose.model("Artist", ArtistSchema);
module.exports = Artist;
