import React, { Component } from 'react';
import { openPort, login } from '../../helpers/Serial';
import { ReactComponent as Check } from '../../check.svg';

class Wizard extends Component {
  state = {
    output: undefined,
  };

  constructor(props) {
    super(props);
    this.openConnection = this.openConnection.bind(this);
  }
  openConnection() {
    try {
      openPort().then((port) => {
        login(port).then((output) => {
          console.log(output);
          this.setState({
            output: output,
          });
          // logout(port);
        });
        console.log('before if port');
      });
    } catch {}
  }

  render() {
    const { output } = this.state;
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
              To initiate your device first-time configuration, please make sure
              you device is connected via USB to this computer. Make sure USB-C
              end is connected to the 'CONSOLE' at the device and the other end,
              to your computer.
            </p>
            <p>When ready:</p>
            <form
              className="login-form"
              style={{ alignItems: 'center', height: 'auto' }}
            >
              <footer>
                <button
                  style={{ borderRadius: 25 }}
                  onClick={this.openConnection}
                  disabled={output !== undefined}
                >
                  CONNECT TO DEVICE
                  {output && (
                    <Check
                      style={{
                        width: 16,
                        top: 3,
                        position: 'relative',
                        right: -10,
                      }}
                    />
                  )}
                </button>

                <button
                  style={{ borderRadius: 25, marginLeft: 30 }}
                  disabled={output === undefined}
                >
                  START FIRST TIME WIZARD
                </button>
              </footer>
            </form>
            {/* {output && (
              <pre>
                {output.map((item, i) => (
                  <pre key={i}>{item}</pre>
                ))}
              </pre>
            )} */}
            {output && <pre>{output.join('\n')}</pre>}
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
  }
}

export default Wizard;
