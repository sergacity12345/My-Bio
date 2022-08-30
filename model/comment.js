
const path = require("path")

const fs = require("fs");
// const { readFile } = require("fs/promises");

module.exports = class Comment {
    constructor(email,description){
        this.email = email;
        this.description = description;

    }
    save(){
        const p = path.join(path.dirname(process.mainModule.filename), "data","feedback.json")
        fs.readFile(p,(err, fileContent)=>{
            let feedBack = []
            if(!err){
                feedBack = JSON.parse(fileContent)
            }
            feedBack.push(this)
            fs.writeFile(p,JSON.stringify(feedBack),(err)=>{
                // console.log(err)
                console.log(p)
            })
            // }
            
            
        })
    }
}

            // if(this.email){
            //     const existingEmailIndex = feedBack.findIndex(curr=> curr.email === this.email);
            //     const updatedEmail = [...feedBack]
            //     console.log("UPDATEDEMAIL", updatedEmail)
            //     updatedEmail[existingEmailIndex] = this;
            //     fs.writeFile(p,JSON.stringify(updatedEmail),(err)=>{
            //         console.log("UPDATED",updatedEmail)
            //     })
            // }else{