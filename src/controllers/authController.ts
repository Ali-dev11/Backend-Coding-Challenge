import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import passport from 'passport'
import jwt, {Secret} from 'jsonwebtoken'
import 'dotenv/config'

import UserModel, {IUser} from '../models/userModel'

export const register = async (req: Request, res: Response) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10)
		const user = new UserModel({
			email: req.body.email,
			password: hashedPassword,
		})
		await user.save()
		res.json({user: {id: user._id, email: user.email}})
	} catch (error) {
		res.status(400).json({error: 'Invalid Fields'})
	}
}

export const login = async (req: Request, res: Response) => {
	passport.authenticate(
		'local',
		{session: false},
		(err: Error, user: IUser | false) => {
			try {
				if (err || !user) {
					return res.status(401).json({error: 'Invalid email or password'})
				}

				const token = jwt.sign(
					{id: (user as IUser)._id, email: (user as IUser).email},
					process.env.JWTSECRET as Secret
				)
				res.json({jwt: token})
			} catch (error) {
				return res.status(500).json({error: 'Internal Server Error'})
			}
		}
	)(req, res)
}
