const express = require("express");
const cors = require("cors");
const app  = express();

const authentication = require("./middleware/authenticator");
const emailjob = require("./middleware/emailsender");

const heros = require("./routes/heros");
const home = require("./routes/home");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/herodb",{
    useNewUrlParser:true
}).then(() => {
   console.log('DB Connected!'); 
}).catch(() => {
    console.log('DB Connection Failed!');
});

app.use(cors());
app.use(express.json());
app.use(emailjob);
app.use(authentication);

app.use("/", home);
app.use("/api/heroes", heros); //custom middleware

//make port as a constatnt here 
const PORT = 5500;

herosArray = [
{
    id: 1,
    name: "SpiderMan",
    superPowers: ["A", "B"],
    likesCount: 100
},
{
    id: 2,
    name: "WonderWomen",
    superPowers: ["C", "D"],
    likesCount: 200
},
{
    id: 3,
    name: "BatMan",
    superPowers: ["E", "F"],
    likeCount: 300
},
{
    id: 4,
    name: "Hulk",
    superPowers: ["G", "H"],
    likeCount: 400
  }
]

//get base url / and give next parameter as a function
app.get("/", (req, res) => {
 //create and send the object to it
 res.send("Avengers Assemble!");   
});

//  app.get("/api/heroes", (req,res) =>{
//      var heroes = ['Wonder woman','Bat man','Tinkerbell'];
//     res.send(heroes);
//    //you can make this seperately as an array and cal  res.send(arrayName);
//  });

// app.get("/api/heroes/1", (req,res) =>{
//     //without giving 1 you can make this generic by adding colan and call heroId, hero ID is the property called in the new array 
//     let hero = {
//         name : "Wonder woman",
//         superPowers : ["power1","power2"],
//         likeCount : 100
//     };
//     res.send(hero);
// });

//  app.get("/api/heroes/:heroId" , (req,res) => {
//     let userRequestedId = parseInt(req.params.heroId);

//  //res.send("You have requested hero with Id : $(UserRequestedId)");
//     let requestedHero = herosArray.find(h => h.id === userRequestedId);
//     //res.send(requestedHero);

//     //Filter array to find object with id and send it in the response
//    // requestedHero = herosArray.find(h => h.id === userRequestId);
//      if(!requestedHero){
//        return res.status(404).send("Requested hero Id does not exist on our server");
//     }
//         return res.status(200).send(requestedHero);

 //});

//POST WORK

// app.post("/api/heroes" , (req, res) => {

//     if (!req.body.name){
//         return res.status(400).send("Please check request again!");
//     }

//     //Read the request body and find all the values of the new object to be created
//     //create the object
//     //Append it to the array

//     let newHero = {
//         id: herosArray.length + 1,
//         name: req.body.name,
//         superPowers: req.body.superPowers,
//         likeCount: req.body.likeCount
//     };
//     herosArray.push(newHero);
//     res.send(newHero);
    
// });

// //PUT work
// app.put("/api/heroes/:heroId", (req, res) => {
//     let requestedIdToEdit = parseInt(req.params.heroId);
//     if(!req.body.likeCount) {
//         return res.status(400).send("Request doesnt contain all values!");
//     }
//     let heroToEdit = herosArray.find(h => h.id == requestedIdToEdit);

//     if(!heroToEdit) {
//         return res.status(404).send("Given id doesnt exit!");
//     }
//     heroToEdit.likeCount = req.body.likeCount;
//     res.send(heroToEdit);
// });

// //Delete array

// app.delete("/api/heroes/:heroId" , (req, res) => {
//     let heroToDelete = herosArray.find(h => h.id == parseInt(req.params.heroId));

//     if(!heroToDelete){
//         return res.tatus(404).send("Given id doesnt exit!");
//     }
//     let indexOfHero = herosArray.indexOfHero(heroToDelete);
//     herosArray.splice(indexOfHero, 1);
//     res.send(heroToDelete);
// });

//Middleware

// app.use(express.json());

// app.use((req, res, next) => {
//     console.log("Middleware function..");
//     next();
// });



// //app.use(express.json());
// app.use(emailjob);
// app.use(authentication);
// app.use("/api/heroes", heros); //custom middleware


app.listen(PORT, () => {

//display in console by concatinating the port in two ways
//console.log("Listening to the port" + PORT);
console.log(`Listening to the port ${PORT}`);
});