const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TokenSchema = new Schema({
    id: ObjectId,
    name: String,
    userId: {type: ObjectId, ref: 'User'},
    created: { type: Date, default: Date.now },
});

TokenSchema.set('toObject', {
    transform: (document, rObj) => {
        rObj.id = rObj._id.toString();
        delete rObj._id;
        delete rObj.__v;
    }
});
TokenSchema.set('toJSON', {
    transform: (document, rObj) => {
        rObj.id = rObj._id.toString();
        delete rObj._id;
        delete rObj.__v;
    }
});

const Token = mongoose.model("Token", TokenSchema);
module.exports = Token;
