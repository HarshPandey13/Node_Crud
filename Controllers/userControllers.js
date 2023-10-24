const users = require('../models/userSchema')
const moment = require('moment')

//user register
exports.userpost = async (req, res) => {
    const { name, email, mobile, gender, status } = req.body;

    if (!name || !email || !mobile || !gender || !status) {
        res.status(400).json({ error: "All input is required" });
    }

    try {
        const preuser = await users.findOne({ email: email });
        if (preuser) {
            res.status(400).json({ error: "This user is already exist in our database" });
        }
        else {
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const userData = new users({
                name, email, mobile, gender, status, datecreated: dateCreate
            });
            await userData.save();
            res.status(200).json(userData);
        }
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
}

//get all users
exports.getUsers = async (req, res) => {
    try {
        const userData = await users.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
}

//get single user

exports.getSingleuser = async (req, res) => {
    const { name } = req.params;
    try {
        const Singleuser = await users.findOne({ name: name });
        if (!Singleuser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(Singleuser);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
}

//delete user

exports.deleteUser = async (req, res) => {
    const { name } = req.params;

    try {
        //const deleteUser = await users.findByIdAndDelete({_id:id}); //for id
        const deleteUser = await users.findOneAndDelete({ name: name }); //for both name and id
        if (!deleteUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
}

//update user

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, mobile, gender, status } = req.body;

    try {
        const dateupdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        const updateuser = await users.findByIdAndUpdate({ _id: id }, {
            name, email, mobile, gender, status, dateupdated: dateupdate
        }, { new: true });

        await updateuser.save();
        res.status(200).json(updateuser);

    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }

}
