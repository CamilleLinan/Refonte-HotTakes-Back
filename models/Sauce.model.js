const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sauceSchema = new Schema ({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, min: 1, max: 5, required: true },
    likes: { type: Number, required: false, default:0 },
    dislikes: { type: Number, required: false, default:0 },
    usersLiked: { type: [String], required: false },
    usersDisliked: { type: [String], required: false },
}, {timestamps: true});

module.exports = mongoose.model('Sauce', sauceSchema);