import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/inked anime.png";
import projImg2 from "../assets/img/grww.tech.png";
import projImg3 from "../assets/img/plantdisease.png";
import projImg4 from "../assets/img/shoewebsite.png";
import projImg5 from "../assets/img/photography.png";
import projImg6 from "../assets/img/Cat.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce",
      description: "E-commerce",
      link: "https://inkedanime.com/",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Business portfolio",
      link: "https://grww.tech/",
      imgUrl: projImg2,
    },
    {
      title: "Plant Disease Detection",
      description: "Minor Project",
      link: "https://example.com/",
      imgUrl: projImg3,
    },
    {
      title: "Shoe Website",
      description: "E-commerce",
      link: "https://example.com/",
      imgUrl: projImg4,
    },
    {
      title: "Photography Business",
      description: "Portfoilio",
      link: "https://example.com/",
      imgUrl: projImg5,
    },
    {
      title: "Cat Game",
      description: "Game",
      link: "https://example.com/",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are Some of My work i did using React Framework, wordpress etc</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>x
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p> id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
