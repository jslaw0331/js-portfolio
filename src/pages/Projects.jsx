import { Link } from "react-router-dom"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
            </h1>
            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div className="lg:w-[400px] w-full" key={project.name}>
                        <div className="block-container w-full h-auto">
                            <div className="">
                                <img
                                    src={project.imageUrl}
                                    alt="Project Preview"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <h4 className="text-2xl font-poppins font-semibold">
                                {project.name}
                            </h4>
                            <p className="mt-2 text-slate-500">
                                {project.description}
                            </p>
                            <p className="mt-2 text-slate-500">
                                <span className="font-bold">Technologies Used:</span> {project.techUse}
                            </p>
                            <div className="mt-5 flex items-center gap-2">
                                <Link
                                    to={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600"
                                >
                                    Live Link
                                </Link>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="border-slate-200" />

            <CTA />
        </section>
    )
}

export default Projects