import React from 'react';

function Services({ services }) {

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
      
    return (
        <>
            <div>
            <h2 className="card-title text-5xl mt-10 ml-16">Services</h2>
                <div className=" w-full sm:grid sm:grid-cols-4 gap-6 p-5 grid grid-flow-row">
                    {services.map((service) => {
                        return (
                            <div className="card w-69 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={service.image.url} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{service.name}</h2>
                                    <p>{service.desc}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Get Started</button>
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

export default Services;
