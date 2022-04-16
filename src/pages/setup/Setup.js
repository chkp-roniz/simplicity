import React from 'react';

const SetupSelector = () => {
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
            SELECT YOUR SETUP
          </h2>
          <p>
            Please select which manage solution would you like for your device:
          </p>

          <form
            class="login-form"
            style={{ alignItems: 'center' }}
            action="/cloud-mgmt"
          >
            <footer>
              <button type="submit" style={{ borderRadius: 25, width: 250 }}>
                CLOUD MANGED SOLUTION
              </button>
            </footer>
          </form>
          <h2 class="title" style={{ textAlign: 'center' }}>
            OR
          </h2>
          <form
            class="login-form"
            style={{ alignItems: 'center' }}
            action="/on-prem-mgmt"
          >
            <footer>
              <button type="submit" style={{ borderRadius: 25, width: 250 }}>
                SELF MANGED SOLUTION
              </button>
            </footer>
          </form>
        </div>
        {/* <figure>
          <img
            src="https://portal.checkpoint.com/images/infinity.png"
            alt="infinity"
          />
          <Figure />
          <figcaption>
            <h2>Check Point Infinity Vision</h2>
          </figcaption>
        </figure> */}
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

export default SetupSelector;
