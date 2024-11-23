import { Col } from "react-bootstrap";
import './Projects.css';

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => onClick({ title, description, imgUrl })}>
        <img src={imgUrl} alt={title} className="img-fluid" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};
