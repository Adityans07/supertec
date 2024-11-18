import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import home1 from "../assets/home1.jpg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const [visibleSections, setVisibleSections] = useState({});

    const handleScroll = () => {
        const sections = document.querySelectorAll('.fade-in-scroll');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setVisibleSections(prev => ({ ...prev, [section.id]: true }));
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="home">
            <div className="hero-image">
                <img src={home1} alt="Hero" />
            </div>
            <div className="text-boxes">
                {Array.from({ length: 4 }, (_, index) => (
                    <div id={`box-${index}`} key={index} className={`text-box fade-in-scroll ${visibleSections[`box-${index}`] ? 'visible' : ''}`}>
                        <h3>Box {index + 1}</h3>
                        <p>This is a description for box {index + 1}.</p>
                    </div>
                ))}
            </div>
            <section id="about-us" className={`about-us fade-in-scroll ${visibleSections["about-us"] ? 'visible' : ''}`}>
                <h2>About Us</h2>
                <p>
                    We are a company dedicated to providing the best services to our customers. Our mission is to deliver quality and excellence in everything we do.
                </p>
            </section>
            <section className={`achievements fade-in-scroll ${visibleSections["achievements"] ? 'visible' : ''}`} id="achievements">
            <h2>Achievements</h2>
                <Slider {...settings}>
                    <div className="achievement">
                        <h3>Achievement 1</h3>
                        <p>Description of Achievement 1.</p>
                    </div>
                    <div className="achievement">
                        <h3>Achievement 2</h3>
                        <p>Description of Achievement 2.</p>
                    </div>
                    <div className="achievement">
                        <h3>Achievement 3</h3>
                        <p>Description of Achievement 3.</p>
                    </div>
                    <div className="achievement">
                        <h3>Achievement 4</h3>
                        <p>Description of Achievement 4.</p>
                    </div>
                    <div className="achievement">
                        <h3>Achievement 5</h3>
                        <p>Description of Achievement 5.</p>
                    </div>
                </Slider>
            </section>
            <section className={`video-section fade-in-scroll ${visibleSections["video-section"] ? 'visible' : ''}`} id="video-section">
                <h2>Watch Our Video</h2>
                <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    )
};
        

export default Home;