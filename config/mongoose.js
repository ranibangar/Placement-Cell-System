const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://ranibangar111:rani@123@cluster0.agc0dxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/placements-cell-db');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));
