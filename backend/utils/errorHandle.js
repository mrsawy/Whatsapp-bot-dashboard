// not found
const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};
// if error catch it and pass it to next fn.
const resolver = ShoofFn => (req, res, next) => {
    Promise.resolve(ShoofFn(req, res, next)).catch(next);
}
//Error handling
const errorHandler = (err, req, res, next) => {
    console.log('Errorrrrr: ', err);
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statusCode);
    //---> don't forget to add error logs before send the error to client
    res.json({
        name: err?.name,
        message: err.message
        //message: err.message.replace(/"/g, '')
        //message: err.errors[0].message ? err.errors[0].message : err?.message,
        //stack: err?.stack,
    });
};



module.exports = { errorHandler, notFound, resolver };



