const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/youtubeRegistraion",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection with database successful`);
}).catch(  (e) =>{
    console.log(`no connection`);
} )