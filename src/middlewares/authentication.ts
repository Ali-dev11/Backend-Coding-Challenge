import passport from 'passport'
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt'
import {Strategy as LocalStrategy} from 'passport-local'
import 'dotenv/config'

import UserModel from '../models/userModel'

// JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWTSECRET,
}

passport.use(
	new JwtStrategy(jwtOptions, async (payload, done) => {
		try {
			const user = await UserModel.findById(payload.id).select('-password')

			if (user) {
				return done(null, user)
			} else {
				return done(null, false)
			}
		} catch (error) {
			return done(error, false)
		}
	})
)

// Local Strategy
const localOptions = {usernameField: 'email'}

passport.use(
	new LocalStrategy(localOptions, async (email, password, done) => {
		try {
			const user = await UserModel.findOne({email})

			if (!user) {
				return done(null, false, {message: 'Invalid email or password'})
			}

			const isValidPassword = await user.comparePassword(password)

			if (!isValidPassword) {
				return done(null, false, {message: 'Invalid email or password'})
			}

			return done(null, user)
		} catch (error) {
			return done(error)
		}
	})
)

export default passport
