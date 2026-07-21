import clientPromise from "./lib/mongodb"; // Adjust path if needed

async function getBlogs() {
  try {
    const client = await clientPromise;
    const db = client.db("test"); // Replace with your actual database name
    const blogs = await db.collection("courses").find().toArray();

    return blogs.map((blog) => ({
      _id: blog._id.toString(), // Convert ObjectId to string
      title: blog.title,
      description: blog.description,
      duration: blog.duration,
      imagetitle: blog.imagetitle,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs(); // Fetch blogs data

  return (
    <div className="py-28 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>

      <a
        href="/courses/devops-genai-mastery"
        className="block rounded-2xl border border-purple-800/40 bg-gradient-to-r from-[#1a0f3d] to-[#0e1a3d] p-6 mb-10 hover:border-purple-500 transition"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full mb-2">
              🚀 Upcoming Course
            </span>
            <h2 className="text-xl font-bold text-white">
              DevOps &amp; GenAI Mastery Program
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              4-month hybrid program covering DevOps, SRE, CloudOps &amp; Generative AI. 2025 cohort enrolling now.
            </p>
          </div>
          <span className="text-purple-300 font-semibold whitespace-nowrap">
            View Details →
          </span>
        </div>
      </a>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-black">{blog.title}</h3>
                <p className="text-sm text-gray-500">{blog.duration}</p>
              </div>

              <iframe
                src={blog.imagetitle}
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                allowtransparency
                className="rounded-md my-4"
              />

              <p className="text-sm text-gray-700">{blog.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Blogs available.</p>
      )}
    </div>
  );
}


// import clientPromise from "./lib/mongodb"; // Adjust path if needed

// interface Blog {
//   _id: string;
//   title: string;
//   description: string;
//   duration: string;
//   imagetitle: string;
// }

// async function getBlogs(): Promise<Blog[]> {
//   try {
//     const client = await clientPromise;
//     const db = client.db("test"); // Replace with your actual database name
//     const blogs = await db.collection("courses").find().toArray();

//     return blogs.map((blog) => ({
//       _id: blog._id.toString(), // Convert ObjectId to string
//       title: blog.title,
//       description: blog.description,
//       duration: blog.duration,
//       imagetitle: blog.imagetitle,
//     }));
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     return [];
//   }
// }

// export default async function BlogsPage() {
//   const blogs = await getBlogs(); // Fetch blogs data

//   return (
//     <div className="py-28 max-w-6xl mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>

//       {blogs.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogs.map((blog) => (
//             <div key={blog._id} className="bg-white rounded-lg shadow-lg p-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-bold text-black">{blog.title}</h3>
//                 <p className="text-sm text-gray-500">{blog.duration}</p>
//               </div>

//               <iframe
//                 src={blog.imagetitle}
//                 width="100%"
//                 height="400"
//                 frameBorder="0"
//                 scrolling="no"
//                 allowTransparency
//                 className="rounded-md my-4"
//               />

//               <p className="text-sm text-gray-700">{blog.description}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No Blogs available.</p>
//       )}
//     </div>
//   );
// }
