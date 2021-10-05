const express = require("express");

//1: create a new router
const router = new express.Router();
const Student = require("../models/students")

router.post("/students", async (req, res) => {

    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }
})
 
//read the data of registered students
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})

//get an individual student data

router.get("/students/:id", async (req, res) => {
    try {
        const _Id = req.params.id;
        const studentData = await Student.findById({ _id: _Id });

        if (!studentData) {
            return res.status(404).send();
        } else {
            res.status(200).send(studentData);
        }

    } catch (e) {
        res.send(e);
    }
})

//update the students by id
router.patch("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updateStudents);
    } catch (e) {
        res.status(404).send(e);
    }
})

//delete the students record
router.delete("/students/:id",async(req,res)=>{
    try {
        // const id = req.params.id;
       const deleteStudent = await Student.findByIdAndDelete(req.params.id);
       if(!req.params.id){
           return res.status(404).send();
       }
       res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;
