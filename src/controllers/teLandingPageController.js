const teLandingPageModel = require('../models/teLandingPage');

const tePage = async(req,res) => {
    try{
        //console.log("data");
const data = await teLandingPageModel.find();
console.log(data);
res.status(200).json(data);
    }
    catch(error){
        res.status(500).json("Error fetching data");
    }
}

module.exports = {tePage};