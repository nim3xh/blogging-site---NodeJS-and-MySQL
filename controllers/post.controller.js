const models = require('../models');

function save(req, res) {
    // save logic
    const post={
        title:req.body.title,
        content:req.body.content,
        imageUrl:req.body.image_url,
        categoryId:req.body.category_id,
        userId:1
    }

    models.Post.create(post).then(result=>{
        res.status(201).json({
            message:"Post created successfully",
            post:result
        });
    }).catch(error=>{
        res.status(500).json({
            message:"Something went wrong",
            error:error
        });
    });
}

function show(req, res) {
    // show logic
    const id=req.params.id;
    models.Post.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"Post not found"
            });
        }
    }).catch(error=>{
        res.status(500).json({
            message:"Something went wrong",
            error:error
        });
    });
}

function index(req, res) {
    // index logic
    models.Post.findAll().then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json({
            message:"Something went wrong",
            error:error
        });
    });
}

module.exports = {
    save: save,
    show: show,
    index: index
}