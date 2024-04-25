const models = require('../models');
const validator = require('fastest-validator');

function save(req, res){
    const comment={
        content: req.body.content,
        postId: req.body.post_id,
        userId: 1
    }

    const schema = {
        content: {type: "string", optional: false, max: "500"},
        postId: {type: "number", optional: false}
    }

    const v = new validator();
    const validationResponse = v.validate(comment, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            error: validationResponse
        });
    }

    models.Comment.create(comment).then(result=>{
        res.status(201).json({
            message: "Comment created successfully",
            comment: result
        });
    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

module.exports = {
    save: save
}