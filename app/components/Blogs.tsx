"use client";
import { motion } from "framer-motion";
import blogs from "@/data/blogs.json";

export default function Blog() {
  return (
    <section id="blog" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Travel Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}