import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-dark text-white min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight">
            Unlock the Potential of Flutter
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
            Your Premier Partner for Cross-Platform App Excellence!
          </p>
          
          <button className="bg-gradient-to-r from-primary to-cyan-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            UPGRADE YOUR TECH
          </button>
        </div>
        
        {/* Right Content - Code Editor (Now scrolls with page) */}
        <div className="relative">
          {/* Main Code Window - Positioned to scroll naturally */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl relative z-10">
            {/* Window Controls */}
            <div className="flex items-center space-x-2 bg-gray-900 px-4 py-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              <pre className="text-gray-300 leading-relaxed">
                <span className="text-blue-400">class</span> <span className="text-yellow-300">MyApp</span> <span className="text-blue-400">extends</span> <span className="text-yellow-300">StatelessWidget</span> <span className="text-gray-400">{'{'}</span>
                {'\n'}  <span className="text-gray-500">// This widget is the root of your application.</span>
                {'\n'}  <span className="text-blue-400">@override</span>
                {'\n'}  <span className="text-yellow-300">Widget</span> <span className="text-white">build</span>(<span className="text-yellow-300">BuildContext</span> <span className="text-white">context</span>) <span className="text-gray-400">{'{'}</span>
                {'\n'}    <span className="text-blue-400">return</span> <span className="text-yellow-300">MaterialApp</span>(<span className="text-gray-400">{'{'}</span>
                {'\n'}      <span className="text-green-400">title:</span> <span className="text-orange-400">'Flutter Demo'</span>,
                {'\n'}      <span className="text-green-400">theme:</span> <span className="text-yellow-300">ThemeData</span>(<span className="text-gray-400">{'{'}</span>
                {'\n'}        <span className="text-green-400">primarySwatch:</span> <span className="text-yellow-300">Colors</span>.<span className="text-blue-400">blue</span>,
                {'\n'}      <span className="text-gray-400">{'}'}</span>),
                {'\n'}      <span className="text-green-400">home:</span> <span className="text-yellow-300">MyHomePage</span>(<span className="text-green-400">title:</span> <span className="text-orange-400">'Flutter Demo'</span>),
                {'\n'}    <span className="text-gray-400">{'}'}</span>);
                {'\n'}  <span className="text-gray-400">{'}'}</span>
                {'\n'}<span className="text-gray-400">{'}'}</span>
              </pre>
            </div>
          </div>

          {/* Secondary Code Window - Now positioned to scroll with page */}
          <div className="absolute top-16 right-4 bg-gray-800 rounded-lg p-4 shadow-xl w-72 z-20">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="font-mono text-xs text-gray-300">
              <span className="text-blue-400">onTapArrowLeft</span>(<span className="text-yellow-300">BuildContext</span> <span className="text-white">context</span>) <span className="text-gray-400">{'{'}</span>
              {'\n'}  <span className="text-yellow-300">Navigator</span>.<span className="text-blue-400">pop</span>(<span className="text-white">context</span>);
              {'\n'}<span className="text-gray-400">{'}'}</span>
            </div>
          </div>

          {/* Decorative Elements that scroll with content */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-600/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
