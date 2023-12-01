import {Request, Response} from 'express'

export const getUser = (req: Request, res: Response) => {
	try {
		const user = req.user
		return res.json({user})
	} catch (error) {
		res.status(400).json({error: 'Not found'})
	}
}
