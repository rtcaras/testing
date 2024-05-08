
const Task = require('../models/Taskmodel')
const getAllTasks = async (req, res) => {
    try {
        const getTask = await Task.find();
        res.json(getTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createTask = async(req,res) =>{
    const task = await Task.create(req.body)
    res.status(201) .json({task})
}
const getTask = (req,res) =>{
    res.json({id:req.params.id})
}
const updateTask = async (req, res) => {
        try {
            const patchTask = await Task.findById(req.params.id);

            if (req.body.name) {
                patchTask.name = req.body.name;
            }
            if (req.body.completed !== undefined) {
                patchTask.completed = req.body.completed;
            }

            const patchedTask = await patchTask.save();
            res.json(patchedTask);
         } catch (err) {
                res.status(400).json({ message: err.message });
            }
          };

const deleteTask = (async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task == null) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.remove();
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports  = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
