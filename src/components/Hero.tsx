function Hero() {
  return (
    <section id="home" className="max-w-5xl mx-auto px-6 py-20">
      {/* Asymmetric Hero Card with Left Accent Border */}
      <div className="border-l-4 border-teal-500 bg-white shadow-sm border-y border-r border-gray-200 rounded-r-2xl p-8 sm:p-12">
        <p className="text-xs font-bold text-teal-600 tracking-widest uppercase">
          Front-End Developer
        </p>

        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Hi, I'm Christienjane
        </h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
          I build simple, clean, and responsive web applications with a focus on good user experience and modern code standards.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#projects"
            className="bg-teal-600 text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-teal-500 transition-colors"
          >
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero; 