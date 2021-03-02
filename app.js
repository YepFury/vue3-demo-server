const Koa = require("koa");
const cors = require("koa2-cors");
const router = require("./routes");
const app = new Koa();

app.use(
    cors({
        origin: function (ctx) {
            return "*";
        },
        exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
        maxAge: 1000,
        credentials: true,
        allowMethods: ["GET", "POST", "DELETE"],
        allowHeaders: ["Content-Type", "Authorization", "Accept"],
    })
);
app.use(router.routes(), router.allowedMethods());
app.listen(3000);
