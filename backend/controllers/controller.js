exports.getAlltodos = async (req, res) => {
    try {
        res.send("Hello this is me");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};