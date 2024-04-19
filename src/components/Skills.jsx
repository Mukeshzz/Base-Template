import React, { useState } from 'react';

function Skills({ skills }) {
    const [visibleCards, setVisibleCards] = useState(8);

    const handleShowMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 8);
    };

    return (
        <>
            <div>
            <h2 className="card-title text-5xl mt-10 ml-16">My Skills</h2>
                <div className=" w-full sm:grid sm:grid-cols-4 gap-6 p-5 grid grid-flow-row">
                    {skills.slice(0, visibleCards).map((skill, index) => {
                        return (
                            <div className="card w-69 bg-base-100 shadow-xl" key={index}>
                                <figure className="px-10 pt-10">
                                    <img src={skill.image.url} alt="Shoes" className="rounded-xl sm:h-20 h-24" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{skill.name}</h2>

                                    <div
                                        className="radial-progress"
                                        style={{ '--value': `${skill.percentage}`, '--size': '10rem', '--thickness': '2px' }}
                                        role="progressbar"
                                    >
                                        {skill.percentage}%
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {visibleCards < skills.length && (
                        <button className="btn" onClick={handleShowMore}>
                            Show More
                        </button>
                    )
                    }
                </div>
            </div>
        </>
    );
}

export default Skills;
