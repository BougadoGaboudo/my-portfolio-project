import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Presentation from '../components/Presentation';

const About = () => {
    return (
        <div>
            <Navbar />
            <hr />
            <Presentation />
            <hr />
            <Footer />
        </div>
    );
};

export default About;