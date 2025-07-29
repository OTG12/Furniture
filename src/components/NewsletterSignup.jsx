import React, { useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-blue-600 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <FiMail className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
              <p className="mb-6">Get the latest furniture trends and exclusive offers</p>
              <ul className="text-left space-y-2 text-blue-100">
                <li className="flex items-center">
                  <FiCheck className="mr-2" /> New arrivals previews
                </li>
                <li className="flex items-center">
                  <FiCheck className="mr-2" /> Members-only discounts
                </li>
                <li className="flex items-center">
                  <FiCheck className="mr-2" /> Interior design tips
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8">
            {isSubscribed ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  You've been successfully subscribed to our newsletter.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Join Our Newsletter</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                      I agree to receive marketing emails from GC Furniture
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center ${
                      isLoading
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white transition-colors`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Subscribe Now'
                    )}
                  </button>
                </form>
                <p className="mt-4 text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;