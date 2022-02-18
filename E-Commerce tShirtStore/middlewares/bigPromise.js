//Try-Catch and Async-Await || Use Promise 
module.exports = func => (req, res, next) => 
Promise.resolve(func(req, res, next)).catch(next)