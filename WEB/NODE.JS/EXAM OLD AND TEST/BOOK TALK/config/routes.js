const authController = require('../controllers/auth')
const bookController = require('../controllers/book')
const homeController = require('../controllers/home')


module.exports = (app) => {
    app.use(authController);
    app.use(bookController);
    app.use(homeController);

    app.use("*", (req, res) => {
        res.render('404', {title: 'Page not found'});
    })
    
}