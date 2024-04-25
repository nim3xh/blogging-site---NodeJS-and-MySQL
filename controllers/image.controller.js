function upload(req,res){
    if(req.file){
        res.status(201).json({
            message: 'Image uploaded successfully',
            imageUrl: req.file.filename
        });
    }else{
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
}

module.exports={
    upload: upload
}