
// func is what we are passing in
module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);

    }
}