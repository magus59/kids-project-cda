const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

require("./Models/Association");
const PathologieRoutes = require("./Routes/PathologieRoutes");
const SymptomeRoutes = require("./Routes/SymptomeRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const FaqRoutes = require("./Routes/FaqRoutes");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send("Hello World! test ok, nous pouvons continuer !");
});

app.use("/pathologie", PathologieRoutes);
app.use("/symptome", SymptomeRoutes);
app.use("/user", UserRoutes);
app.use("/faq", FaqRoutes);


app.use((req, res) => {
  res.status(404).send('Route non trouvée');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});
