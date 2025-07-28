const mongoose = require("mongoose");
const initData = require("./data.js");

const listing = require("../models/listing.js");
const mongo_url = ("mongodb://127.0.0.1:27017/wanderlust");

main().then((res)=>{
    console.log(res);
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);

 
}
const initDb = async ()=>{
    await listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({ ...obj , owner :"687038f9448fe899e763fc6a"}));
    await listing.insertMany(initData.data);
    console.log("data is inserted");
}
initDb();