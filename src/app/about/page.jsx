import Link from "next/link";
import styles from "./page.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>
        !ESTE SITE É <strong>SOMENTE</strong> DE CUNHO PEDAGÓGICO!
      </h1>
      <br />
      <p>
        Bom, este site tem o intuito de testar as funcionalidades do{" "}
        <strong>NextJs 13</strong>. Além disso, o projeto faz uso da api publica
        do Youtube{" "}
        <a
          href="http://developers.google.com/youtube/v3/getting-started?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer">
          confira aqui!
        </a>
      </p>
    </div>
  );
};

export default About;
