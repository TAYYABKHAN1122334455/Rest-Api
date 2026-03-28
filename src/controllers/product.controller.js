import apiResponse from "../utils/apiResponse.js"
export const getAllProducts =async(req,res)=>{
    const products =["item1","item2"]
    res.status(200).json(
        new apiResponse(200,products,"Products fetched Successfully")
    );
}
export const getAllProductsTesting =async(req,res)=>{
    res.status(200).json(
        new apiResponse(200,null,"Testing route working")
    );
}