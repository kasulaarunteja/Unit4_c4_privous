const app = require("./index");
const connect = require("./configs/db.js");

app.listen(2222, async function () {
    try {
        await connect();
        console.log("listening on port 2222");
    } catch (err) {
        console.log(err.message);
    }
});