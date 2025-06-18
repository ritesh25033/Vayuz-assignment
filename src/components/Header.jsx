import React from 'react';

const Header = ({ onMenuClick }) => {
  return (
    <header className='bg-dark text-white py-40 px-60 border-b border-gray-700 z-30'>
      <div className='flex justify-between items-center'>
        {/* Mobile Menu Button */}
        <button className='lg:hidden text-white mr-10' onClick={onMenuClick}>
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div className='text-primary text-sm uppercase tracking-wider font-medium'>
          Securing Your Flutter App: Best Practices and Techniques
        </div>
      </div>
    </header>
  );
};

export default Header;
