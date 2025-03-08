import { BLOGS } from "@/constants/blogs.constant";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pb-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-semibold">
        Blogs
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {BLOGS.map((blog) => (
          <div
            key={blog.id}
            className="p-4 bg-white border rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <img
              className="h-60 w-full object-cover rounded"
              src={blog.image}
              alt={blog.title}
            />
            <h2 className="my-3 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              {blog.title}
            </h2>
            <p className="mb-3 text-gray-500">{blog.description}</p>

            <ReadMoreBtn to={`/blog/${blog.slug}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

const ReadMoreBtn = ({ to }: { to: string }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center font-medium text-blue-800 hover:text-blue-900"
    >
      Read More
      <svg
        className="w-2.5 h-2.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
    </Link>
  );
};
