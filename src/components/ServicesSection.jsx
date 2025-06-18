import React, { useState } from 'react';

const services = [
  {
    title: 'Flutter App Development',
    description:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? Let's get started today!",
  },
  {
    title: 'UI/UX Design',
    description:
      'Create stunning user interfaces and experiences that captivate your audience and drive engagement through intuitive design patterns.',
  },
  {
    title: 'Customization & Integration',
    description:
      'Tailor your applications to meet specific business requirements with seamless third-party integrations and custom functionality.',
  },
  {
    title: 'Testing & Quality Assurance',
    description:
      'Ensure your applications meet the highest quality standards with comprehensive testing strategies and automated quality checks.',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing support and maintenance services to keep your applications running smoothly with regular updates and performance optimization.',
  },
  {
    title: 'Consulting & Training',
    description:
      "Expert guidance and comprehensive training programs for your development team to maximize Flutter's potential in your organization.",
  },
  {
    title: 'Migration & Upgrades',
    description:
      'Seamlessly migrate and upgrade your existing applications to modern Flutter standards with minimal downtime and maximum efficiency.',
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className='bg-dark py-40 px-60 pb-44 lg:py-60 text-white'>
      <div className='container mx-auto px-6 lg:px-12'>
        {/* Header Section with Enhanced Spacing */}
        <div className='text-center mb-24'>
          <h2 className='text-5xl lg:text-6xl font-serif mb-8 leading-tight'>
            Our Dynamic Services Suite!
          </h2>

          {/* Large spacing after main title */}
          <div className='mb-10'></div>

          <p className='text-xl lg:text-2xl text-gray-300 mb-10 font-light leading-relaxed'>
            Embrace Innovation: Let's Create Together!
          </p>

          {/* Additional spacing before description */}
          <div className='mb-8'></div>

          <p className='text-gray-400 max-w-4xl mx-auto leading-relaxed text-lg'>
            Step into innovation! Explore our range of services and let's create
            something extraordinary together. Your vision, our expertise. Let's
            begin!
          </p>
        </div>

        {/* Large spacing between header and content */}
        <div className='mb-20'></div>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-2 gap-20 items-start'>
          {/* Left Side - Services Accordion with Enhanced Spacing */}
          <div className='flex flex-col space-y-10'>
            {services.map((service, idx) => (
              <div key={idx}>
                <div className='bg-gray-800/30 rounded-xl shadow-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300'>
                  {/* Service Header */}
                  <button
                    className='flex items-center justify-between w-full px-8 py-6 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl'
                    onClick={() => handleToggle(idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`service-desc-${idx}`}
                  >
                    <span className='text-xl lg:text-2xl font-serif text-white text-left'>
                      {service.title}
                    </span>
                    <span
                      className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary text-2xl font-bold transition-all duration-300 ${
                        openIndex === idx
                          ? 'rotate-45 bg-primary text-white shadow-lg'
                          : 'bg-transparent hover:bg-primary/10'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Accordion Content with Proper Spacing */}
                  <div
                    id={`service-desc-${idx}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === idx
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    {/* Content spacing */}
                    <div className='px-8 pb-8'>
                      {/* Spacing between header and content */}
                      <div className='mb-4'></div>

                      <p className='text-gray-300 text-lg leading-relaxed'>
                        {service.description}
                      </p>

                      {/* Additional spacing at bottom */}
                      <div className='mt-4'></div>
                    </div>
                  </div>
                </div>

                {/* Manual spacing between service items */}
                {idx < services.length - 1 && <div className='h-6'></div>}
              </div>
            ))}
          </div>

          {/* Right Side - Image with Enhanced Spacing */}
          <div className='flex flex-col justify-start'>
            {/* Top spacing to align with first service */}
            <div className='mb-8'></div>

            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                alt='Mobile development workspace'
                className='rounded-xl w-full h-60 lg:h-[550px] object-cover shadow-2xl'
              />

              {/* Image overlay with spacing */}
            </div>
          </div>
        </div>

        {/* Bottom section spacing */}
        <div className='mt-24'></div>
      </div>
    </section>
  );
};

export default ServicesSection;
