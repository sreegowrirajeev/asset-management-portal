const express = require("express");
const cors = require("cors");

const assetRoutes = require("./routes/assetRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", assetRoutes);

app.listen(5000, () => {

    console.log(
        "Backend running on port 5000"
    );

});
