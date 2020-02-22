const express = require("express");

const router = express.Router()

const Hero = require('../models/hero')


router.get("/", async (req, res) => {
    try {
      /*let heros = await Hero.find({ deceased: false })
        .sort({ name: "asc" })
        .limit(5)
        .select({ name: 1, deceased: 1 });*/
        let heros = await Hero.find();
      res.send(heros);
      res.send(heros);
    } catch (ex) {
      return res.status(500).send(ex.message);
    }
  });

// router.get("/:heroId", )

var herosArray = [
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
    

router.get("/:heroId" , (req,res) => {
    let userRequestedId = parseInt(req.params.heroId);

 //res.send("You have requested hero with Id : $(UserRequestedId)");
    let requestedHero = herosArray.find(h => h.id === userRequestedId);
    //res.send(requestedHero);

    //Filter array to find object with id and send it in the response
   // requestedHero = herosArray.find(h => h.id === userRequestId);
     if(!requestedHero){
       return res.status(404).send("Requested hero Id does not exist on our server");
    }
        return res.status(200).send(requestedHero);

 });

 router.get("/:heroId" ,async (req,res) => {
     let requestedHero = await Hero.findById(req.params.heroId);

     if(!requestedHero){
         return res.status(404).send("equested hero Id does not exist on our server")
     }
     return res.status(200).send(requestedHero);
});

 router.post("/" , async (req, res) => {

    // if (!req.body.name){
    //     return res.status(400).send("Please check request again!");
    // }

    //Read the request body and find all the values of the new object to be created
    //create the object
    //Append it to the array

    // let newHero = {
    //     id: herosArray.length + 1,
    //     name: req.body.name,
    //     superPowers: req.body.superPowers,
    //     likeCount: req.body.likeCount
    // };
    // herosArray.push(newHero);
    // res.send(newHero);

    console.log(req.body.name);

    let heroToAdd = new Hero({
        name: req.body.name,
        likeCount: req.body.likeCount,
        deceased: req.body.deceased,
        birthname: req.body.birthname,
        superPowers: req.body.superPowers,
        movies: req.body.movies
});

try {
    const heroCreated = await heroToAdd.save();
    res.send(heroCreated);
} catch(error) {
    res.send(error.message);
}
});

//PUT work
router.put("/:heroId", async(req, res) => {
    //let requestedIdToEdit = parseInt(req.params.heroId);
    if(!req.body.likeCount) {
        return res.status(404).send("Request doesnt contain all values!");
    }
    //first call findById to find the object from the db
    //then update it

    let heroToEdit = await Hero.findById(req.params.heroId);
    heroToEdit.set({likeCount: req.body.likeCount});
    heroToEdit = await heroToEdit.save();

    res.send(heroToEdit);
});

//Delete data in db
//use findOneAndDelete in mongobd

router.delete("/:heroId" , async (req, res) => {
    let heroToDelete = await Hero.findById(h => h.id == parseInt(req.params.heroId));

    if(!heroToDelete){
        return res.status(404).send("Given id doesnt exit!");
    }
    let indexOfHero = herosArray.indexOfHero(heroToDelete);
    herosArray.splice(indexOfHero, 1);
    res.send(heroToDelete);
});

module.exports = router;