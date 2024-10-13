import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [2, 'Name must be at least 2 characters']
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, 'Email must be unique']
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password must be at least 6 characters']
    },
    img: {
        type: String,
        required: true,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",

    },
    mobileNumber: {
        type: String,
        unique: [true, 'Mobile number must be unique']
    },
    status: {
        type: String,
        default: 'offline',
        enum: ['online', 'offline']
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    confirmEmail: {
        type: Boolean,
        default: false
    },
    otp: {
        type: Number,
        default: null
    },
    passwordChangedAt: {
        type: Date,
        default: null
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    avatar: {
        type: String,
    },
}, { timestamps: true })

// userSchema.post('init', function (doc) {
//     doc.img = process.env.BASE_URL + '/uploads/' + doc.img
// })

export const userModel = mongoose.model('user', userSchema)