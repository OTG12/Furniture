import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import livingRoomImg from "../assets/living-room.jpg";
import bedroomImg from "../assets/bedroom.jpg";
import officeImg from "../assets/office.jpg";
import diningImg from "../assets/dining.jpg";

const categories = [
  {
    id: 1,
    name: "Living Room",
    image: livingRoomImg,
    link: "#living-room",
    description: "Comfortable and stylish seating solutions",
    count: "42 items"
  },
  {
    id: 2,
    name: "Bedroom",
    image: bedroomImg,
    link: "#bedroom",
    description: "Restful sleep with our premium collections",
    count: "36 items"
  },
  {
    id: 3,
    name: "Office",
    image: officeImg,
    link: "#office",
    description: "Productivity meets modern design",
    count: "28 items"
  },
  {
    id: 4,
    name: "Dining",
    image: diningImg,
    link: "#dining",
    description: "Gather around beautiful tables",
    count: "31 items"
  },
];

const ShopByCategory = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Collections
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover our carefully curated collections for every space in your home
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className={`w-full h-64 object-cover transition-all duration-500 ${
                    hoveredCard === category.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex flex-col justify-end p-6">
                  <div className="transform transition-all duration-300 ease-in-out">
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-200">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-300">
                        {category.count}
                      </span>
                      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                        <FiArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#all-categories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
