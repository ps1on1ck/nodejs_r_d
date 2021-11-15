const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    isAdmin: {
        type: Boolean,
        defaultValue: false
    },
    password: String,
    email: {
        type: String,
        unique : true,
        required : true,
        dropDups: true
    },
    created: { type: Date, default: Date.now },
});

UserSchema.set('toObject', {
    transform: (document, rObj) => {
        rObj.id = rObj._id.toString();
        delete rObj._id;
        delete rObj.__v;
    }
});
UserSchema.set('toJSON', {
    transform: (document, rObj) => {
        rObj.id = rObj._id.toString();
        delete rObj._id;
        delete rObj.__v;
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
