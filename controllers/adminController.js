const User = require('../models/users');

exports.adminPageController = (req, res) => {
    res.render('admin', {
        pageTitle: 'Admin'
    })
}

exports.getAddUser = (req, res) => {
    res.render('add-user', {
        pageTitle: 'Create user'
    })
}

exports.postAddUser = (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const number = req.body.number;
    const avatar = req.body.avatar;
    const password = req.body.password;

    const user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        number: number,
        avatar: avatar,
        password: password,
    });

    user.save()
        .then(result => {
            console.log(result);
            res.redirect('/admin');
        })
        .catch(err => console.log(err))
}