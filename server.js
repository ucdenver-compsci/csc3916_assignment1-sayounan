const server = require("http").createServer();

server.on("request", (request, response) => {
    const body = [];

    request.on("data", chunk => {
        body.push(chunk);
    });

    request.on("end", () => {
            const bodyString = body.concat().toString();
            console.log(bodyString);
            response.end(bodyString);
        });

    request.on("error", () => {
            response.statusCode = 400;
            response.end();
        });

    response.on("error", err => {
        console.error(err);
    });
});

const PORT = process.env.PORT || 8008

server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});

module.exports = server; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
