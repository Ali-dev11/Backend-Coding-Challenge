import express from 'express'
import passport from 'passport'

import {getUser} from '../controllers/userController'

const router = express.Router()

router.get('/get-user', passport.authenticate('jwt', {session: false}), getUser)

export default router
