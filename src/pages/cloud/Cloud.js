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
          <h2 className="title" style={{ textAlign: 'center' }}>
            CONNECT YOUR DEVICE
          </h2>
          <p>
            Wait for the blinking light to appear over one of the network
            interface ports and plug the network cable into that interface port.
            The other side of this network cable, connect to your network
            socket.
          </p>
          <img src={`${process.env.PUBLIC_URL}/blink.gif`} alt="blink" />
          <p>When done, continue to:</p>
          <form
            class="login-form"
            action="https://portal.checkpoint.com/dashboard/smart-1cloud#/gateways-connection"
            style={{ alignItems: 'center' }}
          >
            <footer>
              <button style={{ borderRadius: 25 }}>
                REGISTER A NEW GATEWAY
              </button>
            </footer>
          </form>
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
