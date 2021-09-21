var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/**
* Connect to DB
*/
const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b9bde1c654b8e2',
    password: 'df4ea8ae',
    database: 'heroku_040a333e503ac09',
    port: 3306,
    insecureAuth: true
});

router.post("/get-product", function (req, res) {

    let query = `SELECT * FROM product Where product_id = '${req.body.product_id}';`;

    connection.connect(function (error) {
        if (error) {
            res.send({ message: 'Error in connection/n' + error });
        }
        else {
            connection.query(query, function (error, result) {
                if (error) {
                    res.send({ message: 'Error in query/n' + error });
                }
                else {
                    res.send(result);
                }
            });
        }
    });
});


//localhost:5001/products/get-all-products
router.post("/get-all-products", function (req, res) {

    let query = `SELECT * FROM product;`;

    connection.connect(function (error) {
        if (error) {
            res.send({ message: 'Error in connection/n' + error });
        }
        else {
            connection.query(query, function (error, result) {
                if (error) {
                    res.send({ message: 'Error in query/n' + error });
                }
                else {
                    res.send(result);
                }
            });
        }
    });
});

module.exports = router;
