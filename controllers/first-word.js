const router = require('express').Router(); 

//! Get request
router.get('/first-word', (req, res) => {
    try {
        const name = req.body; 
        res.send(name); 
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}); 

module.exports = router;