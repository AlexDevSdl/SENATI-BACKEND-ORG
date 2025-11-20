const app = require("./src/app");
const sequelize = require("./src/settings/db");

const port = 3000

async function start() {
    try {
        await sequelize.sync();
        app.listen(port, () => console.log("iniciando servidor con express"));
    } catch (err) {
        console.error("error", err);
    }
}

start();