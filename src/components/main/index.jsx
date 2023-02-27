import { Container, Home, About } from "./styles";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import looperBG from "../../assets/looperBg.svg";
import imgLinkedin from "../../assets/linkedin.svg";
import imgGithub from "../../assets/github.svg";
import imgEmail from "../../assets/mail.svg";
import imgDownload from "../../assets/download-cloud.svg";
import CV from "../../assets/pdf/CV-Robson-Carvalho.pdf";
import profile from "../../assets/profile.png";

import { Button } from "../button";

import { Experience } from "../experience";
import { Projects } from "../projects";

export const Main = () => {
  const {
    gradients: { pink, purple, violet, blue },
  } = useContext(ThemeContext);

  return (
    <Container>
      <Home id="home">
        <div className="content">
          <div className="texts">
            <span>OLÁ, EU SOU</span>
            <h2>ROBSON CARVALHO</h2>
            <span>DESENVOLVEDOR FRONT-END.</span>
          </div>
          <div className="links">
            <Button
              name="LinkedIn"
              link="https://www.linkedin.com/in/devrobsoncarvalho/"
              icon={imgLinkedin}
              description="Linkedin icon"
              primaryColor={violet}
              secondColor={blue}
              download={false}
              outside={true}
              deg={20}
            />
            <Button
              name="GitHub"
              link="https://github.com/Robson-Carvalho"
              icon={imgGithub}
              description="GitHub icon"
              primaryColor={pink}
              secondColor={purple}
              download={false}
              outside={true}
              deg={160}
            />
          </div>
        </div>
        <img
          className="looperBG"
          src={looperBG}
          alt="Desenho futurista geométrico"
        />
      </Home>
      <About id="about">
        <div className="container">
          <img src={profile} className="profile" alt="profile" />
          <div className="content">
            <h3>SOBRE MIM</h3>
            <p>Cruz das Almas, Brasil</p>
            <span>
              Olá, eu me chamo Robson Carvalho! Sou formando em TI pelo
              Instituto Federal Baiano e estou no cursando o primeiro semestre
              de Engenharia da Computção na UEFS.
            </span>
            <div className="links">
              <Button
                name="Currículo"
                link={CV}
                icon={imgDownload}
                description="Download icon"
                primaryColor={pink}
                secondColor={purple}
                download={true}
                outside={true}
                deg={160}
              />
              <Button
                name="E-mail"
                link="mailto:robsoncarvalho.tech@gmail.com"
                icon={imgEmail}
                description="Email icon"
                primaryColor={violet}
                secondColor={blue}
                download={false}
                outside={true}
                deg={20}
              />
            </div>
          </div>
        </div>
      </About>
      <Experience />
      <Projects />
    </Container>
  );
};
