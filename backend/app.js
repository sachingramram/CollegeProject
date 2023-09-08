const express = require("express");


const location_route=require("./routes/locations_route");
const app=express();

 
app.use("/api/locations",location_route);
app.listen(5000,()=>{
    console.log("server running @ 5000");


});

 