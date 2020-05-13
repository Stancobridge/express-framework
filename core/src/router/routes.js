const { app } = require("../../app");

const routes = {};
routes.loadRoutes = () => {
  app.get("/", (req, res) => {
    res.send("this is home");
  });

  app.get("/login", (req, res) => {
    res.send("this is login");
  });

  app.post("/login", (req, res) => {
    console.log(req.body)
    res.send(req.body);
  });

  app.get("/register", (req, res) => {
    res.send("this is register");
  });
};

module.exports = routes