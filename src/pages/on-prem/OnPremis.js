import './on-prem.css';
import React from 'react';

const OnPremis = () => {
  return (
    <div className="cloudinfra-auth-page">
      <a className="cloudinfra-user-form-logo" href="/">
        <img
          src="https://portal.checkpoint.com/images/checkpoint_logo.svg"
          alt="Check Point Infinity Portal"
        />
      </a>
      <main className="cloudinfra-user-form">
        <div className="cloudinfra-user-form-content fx-col fadein">
          <h2 className="title" style={{ textAlign: 'center' }}>
            FIRST TIME WIZARD
          </h2>
          <p>
            The next step would require you to connect the device via USB to you
            laptop or personal computer. Please connect the USB-C type end to
            'CONSOLE' in the device. The other end, please connect to your
            computer.
          </p>
          <img src="/connect.png" alt="connect" />
          <p>
            Once connected, open the following link in your personal computer:
          </p>
          <p className="flex-row">
            <code
              className="flex-auto truncate db"
              title="Copy Command to Clipboard"
            >
              <span role="button" tabIndex="0">
                ${`${process.env.PUBLIC_URL}/first-time-wizard`}
              </span>
            </code>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              onClick={(data) => {
                navigator.share({
                  title: 'First Time Wizard',
                  text: 'Connect USB to device and continue wizard',
                  url: `${process.env.PUBLIC_URL}/first-time-wizard`,
                });
              }}
            >
              <defs></defs>
              <path
                id="Share"
                className="cls-1"
                d="M12.6,11.452a2.022,2.022,0,0,0-1.5.608L5.6,8.716c0-.2.1-0.405,0.1-0.608A1.3,1.3,0,0,0,5.6,7.5l5.5-3.344a2.346,2.346,0,0,0,1.6.709A2.366,2.366,0,0,0,15,2.434,2.45,2.45,0,0,0,12.6,0a2.366,2.366,0,0,0-2.3,2.432,1.3,1.3,0,0,0,.1.608L4.9,6.386a2.346,2.346,0,0,0-1.6-.709A2.366,2.366,0,0,0,1,8.108,2.366,2.366,0,0,0,3.3,10.54a1.978,1.978,0,0,0,1.6-.709l5.5,3.344c0,0.2-.1.3-0.1,0.507a2.278,2.278,0,0,0,2.3,2.33,2.342,2.342,0,0,0,2.3-2.33A2.256,2.256,0,0,0,12.6,11.452Z"
              />
            </svg>
          </p>
        </div>
      </main>
      <footer className="cloudinfra-user-form-footer">
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

export default OnPremis;
