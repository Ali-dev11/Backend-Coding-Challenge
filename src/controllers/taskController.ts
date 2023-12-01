import {Request, Response} from 'express'

import TaskModel, {ITask} from '../models/taskModel'

export const createTask = async (req: Request, res: Response) => {
	try {
		const task = new TaskModel({name: req.body.name})
		await task.save()
		res.json({task: {id: task._id, name: task.name}})
	} catch (error) {
		res.status(500).json({error: 'Internal Server Error'})
	}
}

export const listTasks = async (req: Request, res: Response) => {
	try {
		const tasks = await TaskModel.find()
		const formattedTasks = tasks.map((task: ITask) => ({
			id: task._id,
			name: task.name,
		}))
		res.json({tasks: formattedTasks})
	} catch (error) {
		res.status(500).json({error: 'Internal Server Error'})
	}
}
