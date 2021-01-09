const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>form page</title></head>");
    res.write("<body><form action='/message' method='POST'>");
    res.write(
      "<input type='text' name='msg'><button type='submit'>submit</button>"
    );
    res.write("</form></body>");
    res.write("</html>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "dummy text, matts cool af");
    (res.statusCode = 302), res.setHeader("Location", "/");
    return res.end();
  }
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first node app</title></head>");
  res.write("<body>Hey Matt its matt</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
