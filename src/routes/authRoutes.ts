import express from 'express'
import passport from 'passport'

import {register, login} from '../controllers/authController'
import {userValidation} from '../schemaValidations/userValidation'

const router = express.Router()

router.post('/register', userValidation, register)
router.post('/login', passport.authenticate('local', {session: false}), login)

export default router
