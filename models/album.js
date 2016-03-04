var mongoose = require('mongoose');

var AlbumSchema = new mongoose.schema({
    title: String,
    releaseYear: String,
    length: Number,
    albumCoverUrl: String,
    discographyUrl: String
});

var Album = mongoose.model("Album", ArtistSchema);
module.exports = Album;
