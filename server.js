const jsonServer = require('json-server');
const cors =require('cors');
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults({
    static:"./build"
});
const PORT = process.env.PORT || 5001;
server.use(middleware);
server.use(
    jsonServer.rewriter({
        "/api/*" : "$1",
    })
);
server.use(cors());
server.use(router);
server.listen(PORT, () =>{
    console.log(`Server is running on PORT: ${PORT}`);
})
