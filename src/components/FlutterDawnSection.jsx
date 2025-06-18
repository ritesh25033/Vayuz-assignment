import React from 'react';

const FlutterDawnSection = () => {
  return (
    <section className='bg-dark text-white py-40 px-60 pb-44 lg:py-60 border-b border-gray-700'>
      <div className='container mx-auto px-6 lg:px-12'>
        {/* Main Content Layout */}
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left Content - Title and Subtitle */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-6xl lg:text-7xl font-serif leading-tight mb-6'>
                Flutter's Dawn
              </h2>
              <p className='text-gray-400 text-base uppercase tracking-wider font-medium'>
                History of flutter
              </p>
            </div>
          </div>

          {/* Right Content - Description and Button */}
          <div className='space-y-8'>
            <p className='text-gray-300 leading-relaxed text-xl lg:text-2xl'>
              Uncover the fascinating story of Flutter in 'Flutter's Dawn:
              History of Flutter.' From humble origins to global acclaim, delve
              into its captivating narrative. Explore milestones, triumphs, and
              challenges. Whether tech enthusiast or curious mind, join us on
              this captivating journey!{' '}
              <span className='text-primary cursor-pointer hover:underline'>
                Click to begin!
              </span>
            </p>

            {/* Large spacing before button */}
            <div className='pt-8'>
              <button className='bg-primary text-white px-10 py-4 rounded-full bg-cyan-600 transition-all duration-300 font-bold text-lg flex items-center space-x-3 group shadow-lg hover:shadow-xl transform hover:scale-105'>
                <span>BEGIN</span>
                <svg
                  className='w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlutterDawnSection;
