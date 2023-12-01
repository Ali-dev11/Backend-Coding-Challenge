import express from 'express'
import passport from 'passport'

import {createTask, listTasks} from '../controllers/taskController'

const router = express.Router()

router.post(
	'/create-task',
	passport.authenticate('jwt', {session: false}),
	createTask
)
router.get(
	'/list-tasks',
	passport.authenticate('jwt', {session: false}),
	listTasks
)

export default router
