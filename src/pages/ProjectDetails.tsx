import React from 'react';
import './ProjectDetails.css';

const ProjectDetails: React.FC = () => {
    return (
        <div className="project-details">
            <h1>Project Title</h1>
            <div className="gallery">
                <h2>Gallery</h2>
                <img src="path/to/image1.jpg" alt="Project Image 1" />
                <img src="path/to/image2.jpg" alt="Project Image 2" />
                {/* Add more images as needed */}
            </div>
            <div className="specifications">
                <h2>Specifications</h2>
                <ul>
                    <li>Specification 1: Description</li>
                    <li>Specification 2: Description</li>
                    <li>Specification 3: Description</li>
                    {/* Add more specifications as needed */}
                </ul>
            </div>
            <div className="testimonials">
                <h2>Client Testimonials</h2>
                <blockquote>
                    <p>"Client feedback or testimonial here."</p>
                    <footer>- Client Name</footer>
                </blockquote>
                {/* Add more testimonials as needed */}
            </div>
            <div className="contact-cta">
                <h2>Contact Us</h2>
                <p>Interested in this project? Reach out to us!</p>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default ProjectDetails;
