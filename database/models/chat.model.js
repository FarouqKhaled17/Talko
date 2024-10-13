import mongoose from "mongoose";


const chatSchema = new mongoose.Schema({
    chatName: { type: "string", trim: true },
    chatImage: { type: "string" },
    isGroupChat: { type: "boolean", default: false },
    latestMsg: { type: mongoose.Schema.Types.ObjectId, ref: "message" },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
}, { timestamp: true });

const chatModel = mongoose.model("chat", chatSchema);

export default chatModel;