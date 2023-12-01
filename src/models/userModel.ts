import mongoose, {Document, Schema} from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
	email: string
	password: string
	comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema: Schema = new mongoose.Schema({
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true},
})

userSchema.methods.comparePassword = async function (
	candidatePassword: string
): Promise<boolean> {
	try {
		return await bcrypt.compare(candidatePassword, this.password)
	} catch (error) {
		throw error
	}
}

const UserModel = mongoose.model<IUser>('User', userSchema)

export default UserModel
