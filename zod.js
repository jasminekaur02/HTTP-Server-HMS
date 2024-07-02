const express = require("express")
const zod = require("zod")
const app = express();
const schema = zod.array(zod.number());

app.use(express.json());
app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys ;
    const Response = schema.safeParse(kidneys)
    res.send({
        Response
    })
    });
    app.listen(3000);