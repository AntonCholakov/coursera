import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    language: {
        type: String,
        required: true
    },
    poster: {
        type: Schema.Types.ObjectId,
        ref: 'Poster'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

export default mongoose.model("Course", courseSchema);