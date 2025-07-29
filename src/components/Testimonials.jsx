import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    rating: 5,
    comment: 'The quality of furniture from GC Furniture is exceptional. My clients are always thrilled with the pieces I recommend from here. The modern wooden chair is a particular favorite!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: 'March 15, 2023'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Homeowner',
    rating: 4,
    comment: 'Great customer service and beautiful products. Our living room transformation with the Luxury Sofa Set was exactly what we envisioned. Delivery was prompt and assembly was straightforward.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'February 28, 2023'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Office Manager',
    rating: 5,
    comment: 'We furnished our entire office with GC Furniture pieces. The Premium Office Desks are not only stylish but incredibly functional. Our employees love them!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    date: 'January 10, 2023'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Hotel Owner',
    rating: 5,
    comment: 'For our boutique hotel renovation, we chose GC Furniture for all our guest rooms. The durability and comfort have exceeded our expectations. Guests frequently compliment the furniture.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    date: 'December 5, 2022'
  },
  {
    id: 5,
    name: 'Olivia Smith',
    role: 'Home Stager',
    rating: 4,
    comment: 'I regularly use GC Furniture pieces for staging homes. The timeless designs appeal to a wide range of buyers and help homes sell faster. The Glass Coffee Table is a versatile favorite.',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    date: 'November 20, 2022'
  },
  {
    id: 6,
    name: 'James Peterson',
    role: 'Architect',
    rating: 5,
    comment: 'As an architect, I appreciate furniture that combines form and function. GC Furniture consistently delivers both. The Classic Recliner is perfect for my clients who want comfort without sacrificing style.',
    image: 'https://randomuser.me/api/portraits/men/95.jpg',
    date: 'October 12, 2022'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Customer Experiences
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear from homeowners, designers, and businesses who love our furniture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <div className="relative mb-4">
                <FaQuoteLeft className="text-gray-200 text-3xl absolute -top-2 -left-1" />
                <p className="text-gray-700 pl-8 italic">{testimonial.comment}</p>
              </div>
              
              <p className="text-sm text-gray-500 text-right">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;