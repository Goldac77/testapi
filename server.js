import express from 'express';
const app = express();

app.use(express.json());

app.post("/form", (req, res) => {
    const {
        name,
        email,
        password,
        number,
        additional_comments
    } = req.body;

    res.status(200).send("Form submitted successfully");
})

app.listen(5001, () => {
    console.log("Server started on port 5001");
})