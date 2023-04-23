const db = require('../models');

//create main model

const Employee = db.employee;
const Work = db.work;
//main work

//1. create a task

const addWork = async (req, res) => {
    try {
        console.log("request", req.body);
        const {title, startDate, estimation, progress} = req.body;
        let info = {
            title: title,
            startDate: startDate,
            estimation: estimation,
            progress: progress,
        }

        const existingWork = await Work.findOne({where : {title: title}})
        if(existingWork) {
            res.status(200).json({message: 'Task exists'})
        }
        else {
        const work = await Work.create(info);
            // res.status(200).send(product)
            res.status(200).json({ message: "Task created successfully" })
        }
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({message:'Something went wrong'})
    }
}


module.exports = {
    addWork
}