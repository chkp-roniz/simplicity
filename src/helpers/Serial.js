export function writeToConsole(port, text) {
  const encoder = new TextEncoder();
  const writer = port.writable.getWriter();
  writer.write(encoder.encode(text + '\r'));
  writer.releaseLock();
  writer.releaseLock();
}

export function openPort() {
  return new Promise(async (resolve, reject) => {
    try {
      var port = await navigator.serial.requestPort({});
      var options = {
        baudRate: 9600,
      };

      await port.open(options);
      console.log('<CONNECTED>');
      writeToConsole(port, '');
      resolve(port);
    } catch (e) {
      console.error(e);
      reject();
    }
  });
}

export function login(port) {
  return new Promise(async (resolve, reject) => {
    let line = [''];
    let connected = false;
    let index = 0;
    let read = true;
    while (port && port.readable) {
      try {
        var reader = port.readable.getReader();
        console.log('after reader', reader);
        while (read) {
          console.log('read');
          const { value, done } = await reader.read();

          if (value) {
            var newline = await new Promise((resolve) => {
              let output = new TextDecoder().decode(value);
              // console.log('>', value);
              resolve(output);
              //   <!-- console.log('value', String.fromCharCode.apply(null, value[0])); -->
            });
          }
          if (newline.includes('\r\n')) {
            // console.log('newline', newline.split('\r\n'));
            line[index] += newline.split('\r\n')[0];
            // line += newline.split('\r\n')[0];
            console.log('>', line);
            line.push(newline.split('\r\n')[1]);
            index += 1;
            // line = newline.split('\r\n')[1];
            // console.log('>', line);
          } else {
            line[index] += newline;
          }

          if (line[index].endsWith(':') || line[index].endsWith(': ')) {
            console.log('>', line);
          }

          console.log('>', line);

          if (line[index].endsWith('login: ') && !connected) {
            console.log('now login');
            writeToConsole(port, 'admin');
          }

          if (line[index].endsWith('Password: ') && !connected) {
            console.log('now password');
            writeToConsole(port, 'zubur1');
            console.log('connected');
            connected = true;
            // break;
            writeToConsole(port, 'clish');
            writeToConsole(port, 'show asset system');
            writeToConsole(port, 'exit');
            writeToConsole(port, 'exit');
          }

          if (
            line[index].includes('logout') ||
            (index >= 1 && line[index - 1].includes('logout'))
          ) {
            console.log('logout');
            read = false;
            break;
          }
          if (done) {
            console.log('done', done);
            break;
          }
        }
        console.log('end loop');
        reader.releaseLock();
        reader = undefined;
        port = await closePort(port);
      } catch (e) {
        console.error(e);
        console.log(`<ERROR: ${e.message}>`);
      }
    }
    resolve(line);
  });
}

export function closePort(port) {
  return new Promise(async (resolve, reject) => {
    console.log('logout');
    if (port) {
      try {
        console.log('before close');
        await port.close();
      } catch (e) {
        console.error(e);
        console.log(`<ERROR: ${e.message}>`);
      }
    }
    resolve(port);
  });
}
