import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    poster: {
        type: Schema.Types.ObjectId,
        ref: 'Poster'
    }
});

export default mongoose.model("Category", categorySchema);