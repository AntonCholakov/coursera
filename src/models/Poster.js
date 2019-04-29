import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const posterSchema = new Schema({
    url: {
        type: String,
        required: true
    }
});

export default mongoose.model("Poster", posterSchema);