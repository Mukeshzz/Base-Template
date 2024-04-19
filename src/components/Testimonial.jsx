import React from 'react';

function Testimonial({ testimonials }) {
    return (
        <>
            <div>
                <h2 className="card-title text-5xl m-10">What People Say</h2>
                <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
                    {testimonials.map((testimonial) => {
                        return (
                            <div className="carousel-item">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={testimonial.image.url} className="rounded-xl h-24" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{testimonial.name}</h2>
                                        <p>{testimonial.review}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Testimonial;
