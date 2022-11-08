const express = require("express");
const router = express.Router();

router.get("/user-test", (req, res) => {
    const obj = {
        name: "bkw",
        age: "20"
    }
    res.send(obj);
});

module.exports = router;