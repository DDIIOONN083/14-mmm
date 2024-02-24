/**
 * @Author: Your name
 * @Date:   2024-02-23 22:21:42
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-02-24 17:54:15
 */
import mongoose from "mongoose";

const userCollection = "users";

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
/*   email: { type: String, required: true, unique: true }, */
  email: String, 
  
});
/* console.log(UserSchema);

 */export const UserModel = mongoose.model(userCollection, UserSchema);
