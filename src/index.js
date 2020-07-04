const app = require("./config/server");
//Rutas
require("./app/routes/view2")(app);
require("./app/routes/view1")(app);
require("./app/routes/home")(app);
require("./app/routes/orden")(app);
require("./app/routes/formulario")(app);


// starting the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
