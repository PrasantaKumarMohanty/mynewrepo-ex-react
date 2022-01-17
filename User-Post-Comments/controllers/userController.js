import userModel from '../models/user.js'

class UserController{
    static createDoc = async (req, res) => {
        // res.send("Data Created")
        try {
            const {userName, age} = req.body
            const doc = new userModel({
                userName:userName,
                age:age
                
            })
            const result = await doc.save()
            // return res.status(201).send(result)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    static getAllDoc = async (req, res) => {
        // res.send("All Doc")
        try {
            const result = await userModel.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    static getSingleDocById = async (req, res) => {
        // res.send("get Single Doc By Id")
        try {
            const result = await userModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    static updateDocById = async (req, res) => {
        // res.send("update Doc By Id")
        try {
            const result = await userModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    static deleteDocById = async (req, res) => {
        // res.send("delete Doc By Id")
        try {
            const result = await userModel.findByIdAndDelete(req.params.id, req.body)
            return res.status(204).send(result)
        } catch (error) {
            console.log(error)
        }
    }
    
}

export default UserController