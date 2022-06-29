import { useSearchParams } from "react-router-dom";



const AllBlogs = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder") || "asc"
  const sortField = searchParams.get("sortField") || "createdAt"
  const limit = Number(searchParams.get("limit")) || 4
  const page = Number(searchParams.get("page")) || 0

  const compare = (a, b) => {

    const aField = a[sortField]
    const bField = b[sortField]

    if (sortOrder.toLowerCase() === "asc") {
        if (aField < bField) {
          return -1;
        }
        if (aField > bField) {
          return 1;
        }
    }
    if (sortOrder.toLowerCase() === "desc") {
        if (aField < bField) {
          return 1;
        }
        if (aField > bField) {
          return -1;
        }
    }
    return 0;
  }

  const blogs = props.blogPosts.sort(compare).slice(page * limit, (page * limit) + limit);
  return (
    <>
       <h3>All Blog Posts</h3>
       <p>
        Sort Order: {sortOrder}
       </p>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <p>ID: {blog.id}</p>
            <p>Title: {blog.title}</p>
            <p>Author: {blog.author}</p>
            <p>Text: {blog.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default AllBlogs;
