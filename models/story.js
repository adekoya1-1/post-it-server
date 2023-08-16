const mongoose = require("mongoose")


const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'Story TItle required']
    },
    description: {
        type: String,
        required: [true, "Stroy Description is required "]
    },
    tag: {
        type: String,
        enum: ["nature", 'lifestyle', 'sport', 'technology', 'others'],
        required: [true, "Story tag required"]
    },
    image: {
        type:String,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, 'please provide a user']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}
)

module.exports= mongoose.model("Story", storySchema)