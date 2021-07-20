exports.homePageController = (req, res) => {
    res.render('index', {
        pageTitle: 'Homepage'
    });
}