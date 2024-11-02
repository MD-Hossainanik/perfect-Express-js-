export const createBlog=async(req,res)=>{
  return res.json({massage:'Blog created successfully'})
}
export const readBlog=async(req,res)=>{
    return res.json({massage:'Blog read successfully'})
}
export const updateBlog=async(req,res)=>{
    return res.json({massage:'Blog update successfully'})
}
export const deleteBlog=async(req,res)=>{
    return res.json({massage:'Blog delete successfully'})
}