import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="box">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
          eaque suscipit excepturi libero perspiciatis at nemo quibusdam tempora
          non ipsa veniam dolorem asperiores quidem repellendus tempore, iure
          omnis, error quasi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae
          distinctio doloremque delectus dolore? Consequuntur atque nam
          corrupti, quia nisi ad. Itaque velit ea, odit eius eligendi placeat
          architecto quo!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          aliquam nisi doloribus fuga dolorum beatae excepturi quia veritatis
          possimus cumque reprehenderit maxime, ex error dolor expedita
          consectetur earum similique id! Atque, necessitatibus expedita! Dicta
          repellat modi magnam nihil voluptatem blanditiis dignissimos
          reprehenderit magni iure nisi, nemo, quia officia? Dolorem, maiores.
        </p>
      </div>
      <div className="box">
        <img src={"https://chrisalee.github.io/react_movieDB/about.png"} alt="about-pic" loading="lazy" />
      </div>
    </section>
  );
};

export default About;
