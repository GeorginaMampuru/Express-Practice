const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const Location = require("./location.model")
// QhKDcqZgvWC4zsJU

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(`mongodb+srv://admin:QhKDcqZgvWC4zsJU@cluster0.jtph8wl.mongodb.net/database?retryWrites=true&w=majority`);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established 🚀");
});
app.get("/", (req, res)=>{

})

app.get("/get-location", async (req, res) => {
    const locations = await Location.find({});
    const result = locations.map((location) => {
        return {
            ...location._doc,
            _id: location.id
        }
    })
    return result
})

app.post("/update-location", async (req, res) => {
    try {
        console.log('longitude: ' + req.query?.lng)
        console.log('latitude: ' + req.query?.lat)
        const location = new Location({
            longitude: req.query?.lng,
            latitude: req.query?.lat,
        })
        let result = await location.save();
        return {...result._doc, _id: result._doc._id.toString()}
    }catch(err){
        throw err
    }
})

app.listen(PORT, ()=>{
     console.log("server started on http://localhost:" + PORT)
})
