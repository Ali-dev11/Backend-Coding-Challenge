"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const authController_1 = require("../controllers/authController");
const userValidation_1 = require("../schemaValidations/userValidation");
const router = express_1.default.Router();
router.post('/register', userValidation_1.userValidation, authController_1.register);
router.post('/login', passport_1.default.authenticate('local', { session: false }), authController_1.login);
exports.default = router;
