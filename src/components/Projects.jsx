import React, { useEffect } from 'react';

function Projects({ projects }) {
    return (
        <>
        <div>
        <h2 className="card-title text-5xl mt-10 ml-16">My Projects</h2>
            <div className="grid grid-cols-4 w-full gap-6 p-5 min-h-screen">
                

                {projects.map((project) => {
                    return (
                      <div className="card w-69 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project.image.url} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="card-actions"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
                          </div>
        </>
    );
}

export default Projects;
