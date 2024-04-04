const { query } = require('./db');


// TODO:Create
// TODO:Delete
// TODO:update


// GET ALL TODOS
exports.getAlltodos = async (req, res) => {
    try {
        const data = await query('select * from todos');
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET TODOS OF SPECIFIC USER
// TODO:Add authentication in the front end 
exports.getIdtodos = async (req, res) => {
    try {
        const data = await query('select * from todos where uid =' + req.params.id);
        res.send(data)
    } catch (error) {
        res.status(500).json({ message: "There was an error please contact us" });
    }
}



//Create a new todo

exports.createtodo = async (req, res) => {
    // res.send(`insert into todos (uid, title, \`desc\`, body, priority, status) values (${uid}, '${title}', '${desc}', '${body}', ${prior}, ${status});`);
    //TODO: create a system to generate unique t_id for each task
    try {
        const { title, desc, body, prior, status } = req.body;
        let uid = req.cookies["id"];
        query(`insert into todos (uid, title, \`desc\`, body, priority, status) values (${uid}, '${title}', '${desc}', '${body}', ${prior}, ${status});`);
        res.json({ message: "added" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
exports.deletetodo = async (req, res) => {
    try {
        const { title } = req.body;
        // let uid = req.cookies["id"];
        // res.send(`DELETE FROM todos WHERE title = '${title}';`);
        const data = await query(`DELETE FROM todos WHERE title = '${title}';`);
        res.json({ message: 'done' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}


