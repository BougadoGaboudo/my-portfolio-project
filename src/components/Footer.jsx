import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="contact">
          <h6>Contact</h6>
          <p>bougadogaboudo@gmail.com</p>
        </div>
        <div class="social">
          <h6>Social</h6>
          <a href="https://twitter.com/BougadoGaboudo" target="_blank">
            <img class="logoRS" src="img/twitter.png" alt="Logo Twitter" />
          </a>
          <a href="https://www.pixiv.net/en/users/18819644" target="_blank">
            <img class="logoRS" src="img/pixiv.jpg" alt="Logo Pixiv" />
          </a>
          <a href="https://www.instagram.com/bougado.gaboudo/" target="_blank">
            <img class="logoRS" src="img/insta.png" alt="Logo Instagram" />
          </a>
          <a href="https://www.youtube.com/c/BougadoGaboudo" target="_blank">
            <img class="logoRS" src="img/youtube.png" alt="Logo Youtube" />
          </a>
        </div>
      </div>
      <div class="cp">
        <p>2024 © Bougado</p>
      </div>
    </footer>
  );
};

export default Footer;
