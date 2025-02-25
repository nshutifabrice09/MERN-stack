import User from "../model/userModel.js"

//Inserting / creating
export const create = async (req, res)=>{
    try{
        const newUser = new User(req.body)
        const {email} = newUser;    

        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).js({message: "User already exists"});
        }
        const savedData = await newUser.save();
        res.status(200).json(savedData);

    }catch (error){
        res.status(500).json({errorMessage:error.message})
    }
};

//Read / Fetching
export const getAllUsers = async(req, res)=>{
    try{
        const userData = await User.find();
        if(!userData || userData.length ==- 0){
            return res.status(404).json({message: "User data not found."});
        }
        res.status(200).json(userData);
    }catch(error){
        res.stz
    }
};

//Read / Fetching by ID
export const getUserById = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id); 
        if(!userExist){
            return res.status(404).json({message: "User not found."});
        }
        res.status(200).json(userExist);
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
};

//Update
export const updateUser = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: "User not found."});
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(updatedData);
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
};



//Delete
export const deleteUser = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: "User not found."});
        }
        await User.findByIdDelete(id);
        res.status(200).json({message: "User data deleted successfully."});
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
};

