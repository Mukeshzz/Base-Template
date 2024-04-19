import React, { useState } from 'react';

function Timeline({ educations, expriences }) {
    const [toggle, setToggle] = useState(true);

    const edu = () => {
        setToggle(!toggle);
    };
    return (
        <>
            <div>
                <div className='flex justify-center gap-6 m-8'>

                <button className={`btn btn-outline  ${toggle ? 'bg-gray-400 text-black' : ''} `} onClick={() => setToggle(true)} >Education</button>
                <button className={`btn btn-outline ${!toggle ? 'bg-gray-400  text-black' : ''} `} onClick={() => setToggle(false)}>Exprience</button>

                </div>

                {toggle ? (
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {educations.map((education, index) => {
                            return (
                                <li>
                                    <div className="timeline-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>

                                    {index % 2 === 0 ? (
                                        <div className="timeline-start md:text-end mb-10">
                                            <time className="font-mono italic">
                                                {education.startDate} - {education.endDate}
                                            </time>
                                            <div className="text-lg font-black">{education.jobTitle}</div>
                                            <p>{education.company_name}</p>
                                            {education.summary}
                                        </div>
                                    ) : (
                                        <div className="timeline-end mb-10">
                                            <time className="font-mono italic">
                                                {education.startDate} - {education.endDate}
                                            </time>
                                            <div className="text-lg font-black">{education.jobTitle}</div>
                                            <p>{education.company_name}</p>
                                            {education.summary}
                                        </div>
                                    )}

                                    <hr />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {expriences.map((exprience, index) => {
                            return (
                                <li>
                                    <div className="timeline-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>

                                    {index % 2 === 0 ? (
                                        <div className="timeline-start md:text-end mb-10">
                                            <time className="font-mono italic">
                                                {exprience.startDate} - {exprience.endDate}
                                            </time>
                                            <div className="text-lg font-black">{exprience.jobTitle}</div>
                                            <p>{exprience.company_name}</p>
                                            {exprience.summary}
                                        </div>
                                    ) : (
                                        <div className="timeline-end mb-10">
                                            <time className="font-mono italic">
                                                {exprience.startDate} - {exprience.endDate}
                                            </time>
                                            <div className="text-lg font-black">{exprience.jobTitle}</div>
                                            <p>{exprience.company_name}</p>
                                            {exprience.summary}
                                        </div>
                                    )}

                                    <hr />
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Timeline;
