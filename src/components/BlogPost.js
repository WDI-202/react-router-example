import { useParams } from "react-router-dom";
import { blogPosts } from "../utils/sampleBlogs";

const BlogPost = () => {
    const params = useParams();
    const foundBlog = blogPosts.find((blog)=>{
        return blog.id === parseInt(params.blogId)
    })
    return (
        <div>
            Blog Post Component
            <p>
            ID: {foundBlog.id}
            </p>
            <p>
            Title: {foundBlog.title}
            </p>
            <p>
            Author: {foundBlog.author}
            </p>
            <p>
            Text: {foundBlog.text}
            </p>
        </div>
    )
}

export default BlogPost