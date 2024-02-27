const dbConfig = require("./src/config/dbConfig");
const app = require("./src/server");
dbConfig()
.then(()=>{

    app.listen(3002,()=>{
        console.log("servidor escuchando en el puerto 3002");
    });
}
)
