



import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title : { type: String, required: true },
  content : { type: String, required: true },
  img : { type: String, required: true },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
