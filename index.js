import app from "./src/app.js"  //viene desde app.js

app.listen(app.get("port"))

console.log("Server on port", app.get("port"))