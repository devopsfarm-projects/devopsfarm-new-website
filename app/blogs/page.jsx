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
