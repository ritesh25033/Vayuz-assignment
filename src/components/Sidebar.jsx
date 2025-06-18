import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Desktop Sidebar - Now scrollable, not fixed */}
      <aside className="w-64 bg-dark border-r border-gray-700 z-50 hidden lg:block min-h-screen">
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 pb-12">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-red-500">V</span>
              <span className="text-green-500">A</span>
              <span className="text-yellow-500">Y</span>
              <span className="text-blue-500">U</span>
              <span className="text-purple-500">Z</span>
            </div>
          </div>

          {/* Manual spacing after logo */}
          <div className="h-8"></div>

          {/* Contact Button Section */}
          <div className="px-6">
            <button className="w-full border-2 border-primary text-primary px-4 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide">
              CONTACT US
            </button>
          </div>

          {/* Manual spacing after contact button */}
          <div className="h-12"></div>

          {/* Navigation Menu with manual spacing between each item */}
          <nav className="px-6 flex-1">
            <ul>
              <li className="mb-6">
                <a 
                  href="#app-development" 
                  className="block px-0 py-4 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-b border-gray-800 hover:border-gray-600"
                >
                  App Development
                </a>
              </li>
              
              {/* Manual spacing between menu items */}
              <div className="h-4"></div>
              
              <li className="mb-6">
                <a 
                  href="#challenges" 
                  className="block px-0 py-4 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-b border-gray-800 hover:border-gray-600"
                >
                  Challenges
                </a>
              </li>
              
              {/* Manual spacing between menu items */}
              <div className="h-4"></div>
              
              <li className="mb-6">
                <a 
                  href="#hire-developer" 
                  className="block px-0 py-4 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-b border-gray-800 hover:border-gray-600"
                >
                  Hire Developer
                </a>
              </li>
              
              {/* Manual spacing between menu items */}
              <div className="h-4"></div>
              
              <li className="mb-6">
                <a 
                  href="#community" 
                  className="block px-0 py-4 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-b border-gray-800 hover:border-gray-600"
                >
                  Community
                </a>
              </li>
            </ul>
          </nav>

          {/* Manual spacing before bottom section */}
          <div className="h-16"></div>

          {/* Bottom Section - Image and Lorem Text */}
          <div className="px-6 pb-8 mt-auto">
            <div className="space-y-6">
              {/* Image with manual spacing */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Computer workspace with code on screen" 
                  className="rounded-lg w-full h-36 object-cover shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </div>
              
              {/* Manual spacing between image and text */}
              <div className="h-2"></div>
              
              {/* Lorem Text */}
              <p className="text-gray-400 text-xs leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar - Also scrollable */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-dark border-r border-gray-700 z-50 lg:hidden transform transition-transform duration-300 overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col min-h-full">
          {/* Logo Section with Close Button */}
          <div className="p-6 pb-12 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-red-500">V</span>
              <span className="text-green-500">A</span>
              <span className="text-yellow-500">Y</span>
              <span className="text-blue-500">U</span>
              <span className="text-purple-500">Z</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Manual spacing after logo */}
          <div className="h-8"></div>

          {/* Contact Button Section */}
          <div className="px-6">
            <button className="w-full border-2 border-primary text-primary px-4 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide">
              CONTACT US
            </button>
          </div>

          {/* Manual spacing after contact button */}
          <div className="h-12"></div>

          {/* Navigation Menu with manual spacing */}
          <nav className="px-6 flex-1">
            <ul>
              <li className="mb-6">
                <a 
                  href="#app-development" 
                  className="block px-0 py-4 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-b border-gray-800 hover:border-gray-600"
                  onClick={onClose}
                >
                  App Development
                </a>
              </li>
              
              <div className="h-4"></div>
              
              <li className="mb-6">
                <a 
                  href="#challenges" 
                  className="block px-0 py-4 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-b border-gray-800 hover:border-gray-600"
                  onClick={onClose}
                >
                  Challenges
                </a>
              </li>
              
              <div className="h-4"></div>
              
              <li className="mb-6">
                <a 
                  href="#hire-developer" 
                  className="block px-0 py-4 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-b border-gray-800 hover:border-gray-600"
                  onClick={onClose}
                >
                  Hire Developer
                </a>
              </li>
              
              <div className="h-4"></div>
              
              <li className="mb-6">
                <a 
                  href="#community" 
                  className="block px-0 py-4 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-b border-gray-800 hover:border-gray-600"
                  onClick={onClose}
                >
                  Community
                </a>
              </li>
            </ul>
          </nav>

          {/* Manual spacing before bottom section */}
          <div className="h-16"></div>

          {/* Bottom Section */}
          <div className="px-6 pb-8 mt-auto">
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Computer workspace with code on screen" 
                  className="rounded-lg w-full h-36 object-cover shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </div>
              
              <div className="h-2"></div>
              
              <p className="text-gray-400 text-xs leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
