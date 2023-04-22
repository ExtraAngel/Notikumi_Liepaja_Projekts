const express = require("express"); //gets express
const app = express(); //express is app

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));