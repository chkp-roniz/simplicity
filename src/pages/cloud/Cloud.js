import React from 'react';
const Cloud = () => {
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
            CONTINUE IN SLIDES
          </h2>
        </div>
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

export default Cloud;
