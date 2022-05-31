// ============================
// PARSING URL DI NODEJS
// ============================

const url = require("url");
var adr = "https://www.petanikode.com/search.php?year=2018&month=february";
const q = url.parse(adr, true);

console.log(q);
console.log("protocol : " + q.protocol);
console.log("hostname : " + q.host);
console.log("pathname : " + q.pathname);
console.log("params : " + q.search);

// =======================
// MEMBUAT SERVER STATIS
// =======================
