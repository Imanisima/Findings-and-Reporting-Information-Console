/**
 * 
 */

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	description: { type: String, required: true, },
	priority: { type: String, required: true, },
	progress: { type: String, required: true, },
	dueDate: { type: Date, required: true, },
	attachment: { type: String, required: false, },
	associations: { type: Array, required: true, },
	analysts: { type: Array, required: true, },
	collaborators: { type: Array, required: true, },
	archived: { type: Boolean, required: true, },
}, {
	timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task
