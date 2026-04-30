import UserModel from "../models/UserModels.js"
import { Backcontroller } from "../Controller/BackController.js"


export class UserController extends Backcontroller{
    getAll= async (req, res)=>{
        try{
            const users = await UserModel.getAll()
            this.success(res,"Users retrieved successfully",users);
           
        }catch(error){
            res.status(500).json({error: error.message})
        }
    
    }
    createUser= async(req,res)=>{
        const name = req.body.name;
        if (!name) {
            return res.status(400).json({ error: 'name is required' });
        }

        try{
            const user = await UserModel.create(name);
            this.success(res,"User created successfully",user);
        }catch (error){
            res.status(500).json({ error: error.message })
        }
    }
    updateUser = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        if (!name) {
            return res.status(400).json({ error: 'name is required' });
        }

        const updatedUser = await UserModel.update(id, name);

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        this.success(res, "User updated successfully", updatedUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

    }
        delete=async(req,res)=>{
            try{
                const {id} = req.params;
                const deleted = await UserModel.delete(id);

                if (!deleted) {
                    return res.status(404).json({ error: 'User not found' })
                }

               this.success(res,"User delete successfully",deleted);

            }catch (error){
                res.status(500).json({ error: error.message })
            }
        }

}
export default new UserController()
