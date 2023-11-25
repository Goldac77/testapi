import express, { urlencoded } from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

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