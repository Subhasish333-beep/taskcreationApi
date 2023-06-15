const db = require('../models');
var jwt = require('jsonwebtoken');
var secret_key = 'shhhhh';

//create main model

const Employee = db.employee;

//main work

//1. create a employee

const addEmployee = async (req, res) => {
    try {
        console.log("request", req);
        let info = {
            name: req.body.name,
            age: req.body.age,
            position: req.body.position,
            email: req.body.email,
            password: req.body.password
        }

        const existingEmployee = await Employee.findOne({where : {email: req.body.email}})
        if(existingEmployee) {
            res.status(200).json({message: 'User exists'})
        }
        else {
        const employee = await Employee.create(info);
            // res.status(200).send(product)
            res.status(200).json({ message: "User created successfully" })
        }
    }
        
    
    catch (err) {
        console.log("error", err);
        res.status(500).json({message:'Something went wrong'})
    }
}

const loginEmployee = async(req, res) => {
    try {
        const {email, password} = req.body;
        const existingEmployee = await Employee.findOne({where : {email: email}})
        if(!existingEmployee) {
            return res.status(200).json({message: 'User does not exist.'})
        }   
        else if(existingEmployee.password !== password) {
            return res.status(200).json({message: 'Email or password is incorrect'})
        }
        else {
            var token = jwt.sign({... existingEmployee }, secret_key);
            return res.status(200).json({message: 'success', token: token})
        }
    }
    catch(error) {
        console.log("log error", error);
    }
}

//profile details
const getProfileDetails = async (req, res) => {
    try {
        let id = req.params.id;
        const profileDetails = await Employee.findAll({where : {id: id}, attributes: { exclude: ['password'] }})
            res.status(200).json({ message: "success", data: profileDetails })
        }
    catch (err) {
        console.log("error", err);
        res.status(500).json({message:'Something went wrong'})
    }
}


//update profile

const updateProfile = async(req, res) => {
    try {
        let id = req.params.id;
        const updateProfile = await Employee.update({
            name: req.body.name,
            age: req.body.age,
            position: req.body.position,
            email: req.body.email,
        },{
            where: {id: id}
        })
        res.status(200).json({ message: "success"})
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({message:'Something went wrong'})
    }
}

//change password

const changePassword = async(req, res) => {
    try {
        let id = req.body.id;
        const profileDetails = await Employee.findAll({where : {id: id}})
        // console.log("profile details", profileDetails[0].password);
        if(profileDetails[0]?.password === req.body.current) {
            if(req.body.new === req.body.confirm) {
                const updateProfile = await Employee.update({
                   password: req.body.new
                },{
                    where: {id: id}
                })
                res.status(200).json({ message: "success"})
            }
            else {
                res.status(400).json({message:"password does not match"})
            }
        }
        else {
            res.status(400).json({message:"password does not match"})
        }
       
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({message:'Something went wrong'})
    }
}
module.exports = {
    addEmployee,
    loginEmployee,
    getProfileDetails,
    updateProfile,
    changePassword
}