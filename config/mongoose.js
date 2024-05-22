const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://ranibangar:RKPtdJ3Yt35FuHAC@cluster0.djyxdri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/placement-cell');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));
