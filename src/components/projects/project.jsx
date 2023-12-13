import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	// const videoId = video.split('/').pop(); // Assuming the ID is the last part of the URL after the last '/'
	// const embedUrl = `https://www.youtube.com/embed/${videoId}`;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						{/* <div className="video-container">
							<iframe
								src={embedUrl}
								width="300"
								height="300"
								frameBorder="0"
								allow="autoplay; fullscreen; picture-in-picture"
								allowFullScreen
								title="Project Video"
							></iframe>
						</div> */}
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;


