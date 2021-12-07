const withAuth = (req, res, next) => {
    if (!req.session.u_Id) {
        res.redirect('/');
    } else {
        next();
    }
};

module.exports = withAuth;