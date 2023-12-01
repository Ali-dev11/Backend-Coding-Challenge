import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.set('strictQuery', false)

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI as string)
		console.log('Monogdb Connected....')
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

export default connectDB
