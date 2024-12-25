import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className=" flex flex-col items-center pt-20" id="projects">
      <h2 className="text-center text-6xl font-league-spartan font-bold my-20">PROJECTS</h2>
      <div className="flex flex-col lg:gap-12 gap-8 max-w-[1200px]">
        {PROJECTS.map((project, index) => (
          <div key={index} className="relative md:aspect-video  aspect-[3/4]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-left brightness-50" />
            <div className="absolute top-0 left-0 h-full w-full flex items-center ">
              <div className="ml-6 lg:ml-12 md:max-w-xl w-[70%] ">
                <h6 className="text-xl lg:text-2xl xl:text-4xl font-bold">{project.title}</h6>
                <p className="md:mb-10 lg:mb-24 xl:mb-36 text-base lg:text-lg xl:text-xl mb-24">2024</p>
                <p className="mb-2 text-base lg:text-lg xl:text-xl">{project.description}</p>
                <p className="mb-4 lg:mb-6 text-base lg:text-lg xl:text-xl">Technology: {project.technologies}</p>
                <a href={project.link} className="border px-4 py-2 text-sm lg:text-base hover:button-hover transition duration-500" target="_blank">
                  View Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
