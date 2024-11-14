import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <nav className="navbar bg-body-tertiary text-center">
                <div className="container-fluid w-100">
                    <div className="row w-100">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <img src="../../Images/p3.png" alt="Porsche Logo" width="100" height="100" className="d-inline-block align-top"/></div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid text-center">
                <h1 className="title">About Porsche:</h1>
            </div>

            <div className="container-fluid p-2">
                <div className="row">
                    <div className="col-md-6">
                        <p>The origin story of Porsche, the iconic car manufacturer, dates back to 1948 when Ferdinand Porsche unveiled
                            the first-ever Porsche vehicle, the Porsche 356. However, the roots of the company stretch further back to the
                            early 20th century when Ferdinand Porsche, an Austrian automotive engineer, founded his own engineering consultancy.
                            His expertise in automotive design and engineering led to significant contributions to the development of various high-performance vehicles, including the Volkswagen Beetle.
                            After World War II, Ferdinand's son, Ferry Porsche, spearheaded the creation of the Porsche 356, which embodied the family's vision of combining performance, elegance, and precision engineering.
                            With its distinctive design and exceptional driving dynamics, the Porsche 356 laid the foundation for Porsche's enduring legacy as a premier sports car manufacturer.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="../../Images/c1.jpg" className="d-block w-100" alt="Porsche 356" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
