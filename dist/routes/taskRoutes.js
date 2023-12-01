"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const taskController_1 = require("../controllers/taskController");
const router = express_1.default.Router();
router.post('/create-task', passport_1.default.authenticate('jwt', { session: false }), taskController_1.createTask);
router.get('/list-tasks', passport_1.default.authenticate('jwt', { session: false }), taskController_1.listTasks);
exports.default = router;
