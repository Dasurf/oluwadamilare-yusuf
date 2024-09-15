import React from "react";

export default function TopDescriptions({componentHeaders, component, index}) {
    return (
        <>
            {
                componentHeaders.map(header => {
                    if (header.id === index) {
                        return (
                            <div key={header.id} data-aos="zoom-in">
                                <div className="section-title">
                                    <h1>{header.title}</h1>
                                    <div className="title-design"></div>
                                    <p>{header.description}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
            {component}
        </>
    )
}