import mongoose, {ObjectId, Schema } from "mongoose"

const User = mongoose.model("User", new Schema({
    "id": {type: ObjectId},
    "username":{
        type: String,
        require: true,
        unique: true
    },
    "password":{
        type: String,
        require: true,
    },
}))

export default User