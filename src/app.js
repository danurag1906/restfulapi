const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
//express.json() is a method inbuilt in express to recognize the incoming request object as a JSON object.


//3: we need to register our router
app.use(studentRouter);

app.listen(port, () => {
    console.log(`connection is made at port ${port}`);
})
