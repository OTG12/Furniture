import React from 'react';
import { FiInstagram, FiHeart, FiMessageSquare, FiShare2 } from 'react-icons/fi';

const socialPosts = [
  {
    id: 1,
    username: 'gc_furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    likes: 1243,
    comments: 89,
    caption: 'Our Luxe Sofa Set in a modern living room setup. Tag us in your photos! #GCFurniture #HomeDecor',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    username: 'interior_designer_ella',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a',
    likes: 892,
    comments: 42,
    caption: 'Client dining room featuring GC Furniture pieces. The perfect blend of comfort and style!',
    timestamp: '1 day ago'
  },
  {
    id: 3,
    username: 'home_decor_lover',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267',
    likes: 1567,
    comments: 103,
    caption: 'My cozy corner with the GC recliner - best purchase ever! 🛋️ #ComfortGoals',
    timestamp: '2 days ago'
  },
  {
    id: 4,
    username: 'office_spaces',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd',
    likes: 756,
    comments: 31,
    caption: 'Productive workspace featuring GC Furniture office collection. Functional and beautiful!',
    timestamp: '3 days ago'
  },
  {
    id: 5,
    username: 'gc_furniture',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    likes: 2105,
    comments: 147,
    caption: 'New arrivals just dropped! Swipe up in our stories to shop the collection. #NewAtGC',
    timestamp: '4 days ago'
  },
  {
    id: 6,
    username: 'minimalist_homes',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
    likes: 1342,
    comments: 78,
    caption: 'Minimalist bookshelf from GC Furniture adding perfect storage with style to this home office',
    timestamp: '5 days ago'
  }
];

const SocialMediaFeed = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 mb-4">
            <FiInstagram className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Follow Us @GCFurniture
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Tag your GC Furniture pieces with #GCFurniture for a chance to be featured
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Post Header */}
              <div className="flex items-center p-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                  <img 
                    src={`https://randomuser.me/api/portraits/${post.username === 'gc_furniture' ? 'women/44' : 'men/32'}.jpg`} 
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{post.username}</h3>
                  <p className="text-xs text-gray-500">{post.timestamp}</p>
                </div>
              </div>

              {/* Post Image */}
              <div className="relative aspect-square">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex space-x-4 mb-2">
                  <button className="text-gray-700 hover:text-red-500 transition-colors">
                    <FiHeart className="w-5 h-5" />
                  </button>
                  <button className="text-gray-700 hover:text-blue-500 transition-colors">
                    <FiMessageSquare className="w-5 h-5" />
                  </button>
                  <button className="text-gray-700 hover:text-green-500 transition-colors">
                    <FiShare2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Likes */}
                <p className="font-semibold text-gray-900 mb-1">
                  {post.likes.toLocaleString()} likes
                </p>

                {/* Caption */}
                <p className="text-gray-800 mb-2">
                  <span className="font-semibold">{post.username}</span> {post.caption}
                </p>

                {/* Comments */}
                <button className="text-gray-500 text-sm hover:text-gray-700">
                  View all {post.comments} comments
                </button>

                {/* Shop Now Button */}
                {post.username === 'gc_furniture' && (
                  <button className="mt-3 w-full py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    Shop This Look
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/gc_furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <FiInstagram className="w-5 h-5 mr-2" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeed;