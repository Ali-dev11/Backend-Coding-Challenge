"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const getUser = (req, res) => {
    try {
        const user = req.user;
        return res.json({ user });
    }
    catch (error) {
        res.status(400).json({ error: 'Not found' });
    }
};
exports.getUser = getUser;
