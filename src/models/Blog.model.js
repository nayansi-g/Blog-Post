const mongoose  = require('mongoose');



const BlogSchema = new  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    category_ref:{
        type:String,
        required:true
    },
    content:{
        type:String,
        require:true
    }

})

module.exports = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);