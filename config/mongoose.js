const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://manishchandrakar2001:PUrRZkY3POiCC5vN@cluster0.w5fmnnm.mongodb.net/placements-cell-db');
//     await mongoose.connect('mongodb+srv://placement:1UbhMXi13RXuCwSn@cluster0.p5gbb.mongodb.net/placementcell?retryWrites=true&w=majority');

    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));
