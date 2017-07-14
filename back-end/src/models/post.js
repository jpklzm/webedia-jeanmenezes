import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  	title: { type: String },
  	subTitle: { type: String },
    description: { type: String },
    imageUrl: { type: String },
  	content: { type: String },
    created_at    : { type: Date, required: true, default: Date.now }
});

export const Post = mongoose.model('Post', postSchema);
export default Post;
