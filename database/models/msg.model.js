import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    content: { type: "string",trim: true },
    media: { type: "string" },
    isRead: { type: "boolean", default: false }
}, { timestamp: true });

const msgModel = mongoose.model("msg", msgSchema);

export default msgModel;