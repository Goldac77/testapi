import express, { urlencoded } from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
       res.sendStatus(200);
     }
     else {
       next();
    }
});

app.post("/form", (req, res) => {
    const {
        name,
        email,
        password,
        number,
        additional_comments
    } = req.body;

    res.status(200).send("Form submitted successfully");
    console.log(req.body);
})


app.listen(5001, () => {
    console.log("Server started on port 5001");
})