"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const userModel_1 = __importDefault(require("../models/userModel"));
const register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt_1.default.hash(req.body.password, 10);
        const user = new userModel_1.default({
            email: req.body.email,
            password: hashedPassword,
        });
        await user.save();
        res.json({ user: { id: user._id, email: user.email } });
    }
    catch (error) {
        res.status(400).json({ error: 'Invalid Fields' });
    }
};
exports.register = register;
const login = async (req, res) => {
    passport_1.default.authenticate('local', { session: false }, (err, user) => {
        try {
            if (err || !user) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, process.env.JWTSECRET);
            res.json({ jwt: token });
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    })(req, res);
};
exports.login = login;
