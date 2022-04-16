import React from 'react';
import { ReactComponent as Figure } from '../../figure.svg';

const Welcome = () => {
  return (
    <div className="cloudinfra-auth-page">
      <a class="cloudinfra-user-form-logo" href="/">
        <img
          src="https://portal.checkpoint.com/images/checkpoint_logo.svg"
          alt="Check Point Infinity Portal"
        />
      </a>
      <main class="cloudinfra-user-form">
        <div class="cloudinfra-user-form-content fx-col fadein">
          <h2 class="title" style={{ textAlign: 'center' }}>
            WELCOME
          </h2>
          <p>
            Thank you for choosing Check Point's Internet Security Product
            Suite. Check Point products provide your business with the most up
            to date and secure solutions available today.
          </p>
          <p>
            Welcome to the Check Point family. We look forward to meeting all of
            your current and future network, application, and management
            security needs.
          </p>
          <form
            class="login-form"
            action="#/select-setup"
            style={{ alignItems: 'center' }}
          >
            <footer>
              <button type="submit" style={{ borderRadius: 25 }}>
                Getting Started
              </button>
            </footer>
          </form>
        </div>
        <figure>
          <img
            src="https://portal.checkpoint.com/images/infinity.png"
            alt="infinity"
          />
          <Figure />
          <figcaption>
            <h2>Check Point Infinity Vision</h2>
          </figcaption>
        </figure>
      </main>
      <footer class="cloudinfra-user-form-footer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://supportcenter.checkpoint.com/supportcenter/portal"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.checkpoint.com/about-us/cloud-terms/"
        >
          Terms
        </a>
      </footer>
    </div>
  );
};

export default Welcome;
