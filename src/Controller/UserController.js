import UserModel from "../models/UserModels.js"

class UserController{
    async getAll(req, res){
        try{
            const users = await UserModel.getAll()
            res.json(users)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }
    async create(req,res){
        try{
            const {name}= req.body

            if (!name) {
                return res.status(400).json({ error: 'name is required' })
            }

            const newUser = await UserModel.create(name)
            res.status(201).json(newUser)
        }catch (error){
            res.status(500).json({ error: error.message })
        }
    }
    async update(req,res){
        try{
            const {id}= req.params
            const {name} = req.body
            
            if (!name) {
                return res.status(400).json({ error: 'name is required' })
            }

            const updatedUser = await UserModel.update(id,name)

            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' })
            }

            res.json(updatedUser)

        }catch (error){
            res.status(500).json({ error: error.message })
        }
    }
        async delete (req,res){
            try{
                const {id} = req.params
                const deleted = await UserModel.delete(id)

                if (!deleted) {
                    return res.status(404).json({ error: 'User not found' })
                }

                res.status(204).send()

            }catch (error){
                res.status(500).json({ error: error.message })
            }
        }

}
export default new UserController()
