const BigPromise = require('../middlewares/bigPromise');

exports.home = BigPromise(async(req, res) => {
    //const DB = await something();
    res.status(200).json({
        success: true,
        greeting: "Hello From API"
    })
});

// OR Use Try Catch with Async-Await
exports.homeDummy = async(req, res) => {

    try{
        //const DB = await something();
        res.status(200).json({          
            success: true,
            greeting: "Dummy Route"
        })
    }catch(error){
        console.log(error);
    }
};