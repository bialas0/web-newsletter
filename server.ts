import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const port: number = 3000;

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  let url: string = req.url || '/index.html';
  url = url === '/' ? '/index.html' : url;

  if (url.endsWith('.html')) {
    res.setHeader('Content-Type', 'text/html');
  }
  if (url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css');
  }

  if (req.method === 'POST' && req.url === '/submit-form') {
    let body = '';

    req.on('data', (chunk: string) => {
      body += chunk;
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const formDataObj = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email')
      }

      const filePath: string = path.join(__dirname, 'user_data.json');
      let fileContent = fs.readFileSync(filePath, 'utf8');
      if (fileContent[0] != '[') {
        fs.writeFileSync(filePath, '[' + `[${JSON.stringify(formDataObj)}]`);
      } else {
        fs.writeFileSync(filePath, fileContent.replace(']','') 
        + ',' + JSON.stringify(formDataObj) + ']');
      }
      fs.appendFile(filePath, '\n' + JSON.stringify(formDataObj) + '\n', (err) => {
        if (err) {
          res.writeHead(500);
          res.end('Error with submission or writing...');
        } else {
          res.writeHead(200);
          // res.end('Form submitted\nData written');
          res.writeHead(200, { 'Content-Type': 'text/html' });
          const filePath: string = path.join(__dirname, 'public', 'form_success.html');
          fs.readFile(filePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) {
              res.writeHead(404);
              res.end('404 Not Found...');
            } else {
              res.writeHead(200);
              res.end(data);
            }
          });
        }
      });
    });
  } else {
    const filePath: string = path.join(__dirname, 'public', url);
    fs.readFile(filePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
      if (err) {
        res.writeHead(404);
        res.end('404 Not Found...');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});