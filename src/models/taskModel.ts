import mongoose, {Document, Schema} from 'mongoose'

export interface ITask extends Document {
	name: string
}

const taskSchema: Schema = new mongoose.Schema({
	name: {type: String, required: true},
})

const TaskModel = mongoose.model<ITask>('Task', taskSchema)

export default TaskModel
