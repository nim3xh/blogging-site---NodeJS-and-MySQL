const models = require('../models');

async function test(req,res){
   //one to one 1:1
   

   res.status(200).json({
    data:null
   });
}

module.exports = {
    test: test
}