function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <span className="text-lg font-bold tracking-widest uppercase">
          Christien<span className="text-teal-400">Jane</span>
        </span>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-teal-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;