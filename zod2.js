const express = require("express")
const z = require("zod")
const app = express();
z.string().email().endsWith("@google.com")

const middlewares = [express.json() , userValidator , kidneyValidator]
function middleware(req , res , next){
    req.user = 1;
}
app.get("/",...middlewares , function(req, res) {
   console.log(next);
    res.json({
        msg:"done"
    })
    })

app.use(function(err , req , res , next){
    res.send({
        msg:"internal error "
    })
})
app.listen(3000);