function Projects() {
  const projectList = [
    {
      number: "01",
      title: "Portfolio Website",
      description: "A clean, modern developer portfolio created using React and Tailwind CSS.",
      link: "#",
    },
    {
      number: "02",
      title: "Expense Tracker",
      description: "A functional budget planning app designed to log daily expenses efficiently.",
      link: "#",
    },
    {
      number: "03",
      title: "Notes App",
      description: "A minimal note-taking application supporting local storage persistence.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
      <div className="border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Projects
        </h2>
      </div>

      {/* Stacked Cards with Project Numbers */}
      <div className="space-y-4">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-teal-400 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-xl font-bold text-teal-500">
                {project.number}
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {project.description}
                </p>
              </div>
            </div>

            <a
              href={project.link}
              className="text-xs font-semibold text-gray-900 bg-gray-100 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap"
            >
              View Work
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;