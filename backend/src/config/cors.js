// Habilitando o CORS
module.exports = function (req, res, next) {
    // Adicionando informações no cabeçalho
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,OPTIONS,PUT,PATCH,DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type,Accept'
    );
    next();
};
