const http = require("http");

// ===============
// MEMBUAT SERVER
// ===============
// const server = http.createServer((req, res) => {
//   try {
//     res.end("Hi, selamat datang");
//   } catch (err) {
//     console.log("error");
//   }
// });

// server.listen(8000);

// ===================================
// MODIFIKASI RESPONSE BODY DAN HEADER
// ===================================

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1>Modifikasi Http</h1>");
//     res.end();
//   })
//   .listen(8000);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write('{"nama":"reskybayuandhika","umur":27}');
//     res.end();
//   })
//   .listen(8000);

// ===========================
// MENGAMBIL URL UNTUK ROUTING
// ===========================

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("URL : " + req.url);
//     res.end();
//   })
//   .listen(8000);

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     switch (req.url) {
//       case "/about":
//         res.write("<h1>Ini halaman About</h1>");
//         break;
//       case "/contact":
//         res.write("<h2>Ini halaman kontak</h2>");
//         break;
//       default:
//         res.write("404: Halaman tidak ditemukan");
//         break;
//     }
//     res.end();
//   })
//   .listen(8000);

// ======================================
// CARA MENGAMBIL QUERY STRING DI NODE JS
// ======================================

const url = require("url");
// console.log(url);
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    // console.log(q);
    res.end(q.parse);
  })
  .listen(8000);
