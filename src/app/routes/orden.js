const dbConnection = require("../../config/dbConnection");


module.exports = app => {

    const connection = dbConnection();

    app.get('/listarorden', (req, res) => {
        connection.query('SELECT * FROM orders', (err, result) => {
            res.render('views/orden', {
                class3: result
            });
        });
    });

}