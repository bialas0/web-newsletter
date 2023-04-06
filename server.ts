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

  const filePath: string = path.join(__dirname, 'public', url);
  fs.readFile(filePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });

  
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});