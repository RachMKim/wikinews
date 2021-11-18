const express = require("express");
const morgan = require("morgan");
const {layout} = require("./views/index")
// const db = require("./db");


const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}));
// app.use(express.json()) // To parse the incoming requests with JSON payloads



app.get('/',(req, res) => {
    res.send(layout(''));
  }
)


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
