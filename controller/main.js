const Comment = require("../model/comment");

const path = require("path")


exports.getIndex = (req,res ,next)=>{
    res.sendFile(path.join(__dirname,"../","views","index.html"))
}

exports.getAbout = (req,res ,next)=>{
    res.sendFile(path.join(__dirname,"../","views","about.html"))
}

exports.getHome = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views", "index.html"))
}


exports.postComment = (req,res,next)=>{
    const email = req.body.email;
    const description = req.body.description
    const comment = new Comment(email,description)
    if(email.length > 5 && description.length > 5){
        comment.save()
        res.redirect("/")
    }else{
        return res.redirect("/about.html")
    }
}