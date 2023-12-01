"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTasks = exports.createTask = void 0;
const taskModel_1 = __importDefault(require("../models/taskModel"));
const createTask = async (req, res) => {
    try {
        const task = new taskModel_1.default({ name: req.body.name });
        await task.save();
        res.json({ task: { id: task._id, name: task.name } });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.createTask = createTask;
const listTasks = async (req, res) => {
    try {
        const tasks = await taskModel_1.default.find();
        const formattedTasks = tasks.map((task) => ({
            id: task._id,
            name: task.name,
        }));
        res.json({ tasks: formattedTasks });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.listTasks = listTasks;
