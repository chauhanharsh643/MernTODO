const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

router.post("/addTask", async (req, res) =>{
    try {
        const {title, body, id} = req.body;
        const existingUser = await User.findById(id);

        if(existingUser){
            const list = new List({title, body, user : existingUser});
            await list.save().then(() => res.status(200).json({list}));
            existingUser.list.push(list);
            existingUser.save();
        }
        else{
            res.status(200).json({message : "First Sign up"});
        }
    } catch (error) {
        console.log("there is some error !");
    }
})

// update

router.put("/updateTask/:id", async (req, res) =>{
    try {
        const {title, body} = req.body;
            const list = await List.findByIdAndUpdate(req.params.id, {title, body});
            list.save().then(() => res.status(200).json({message : "Task Updated"}));
        
    } catch (error) {
        console.log("what the fuck2");
    }
})

// delete

router.delete("/deleteTask/:id", async (req, res) =>{
    try {
        const {id} = req.body;
        const existingUser = await User.findByIdAndUpdate(id, {$pull:{list:req.params.id}});

        if(existingUser){
            const list = await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({message : "Task Deleted"}));
        }
        else{
            res.status(200).json({message : "what the fuck1"});
        }
    } catch (error) {
        console.log("what the fuck2");
    }
});

// getTask
router.get("/getTasks/:id", async (req, res) => {
    try {
        const list = await List.find({user: req.params.id});
        if(list.length !== 0){
            res.status(200).json({list : list});
        }
        else{
            res.status(200).json({message : "No Tasks!"});
        }
    } catch (error) {
        res.status(200).json({message : "user not find"});
    }
});


module.exports = router;