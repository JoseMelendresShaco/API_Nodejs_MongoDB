const mongoose = require("mongoose")
const URI = 'mongodb+srv://DBShaco:Zb410l2YQd7MTxHb@cluster0.0ppg8.mongodb.net/Promotor?retryWrites=true&w=majority';

mongoose.connect(URI)
.then(db=>console.log("DB es connected"))
.catch(err=>console.log(error));
module.exports=mongoose;
