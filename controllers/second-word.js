const router = require('express').Router(); 
const db = require('../assets/db.json'); 
const fs = require('fs'); 
const fsPath = './assets/db.json'; 

//! Post request
router.post('/second-word', (req, res) => {
    try {
        const name = req.body;
        const id = db.length + 1; 

        const obj = {
            id: id,
            name: name,
        }

        console.log(name); 
        fs.readFile(fsPath, (err, data) => {
            if(err) console.log(data);

            const db = JSON.parse(data); 

            db.push(obj); 
            fs.writeFile(fsPath, JSON.stringify(db), err => console.log(err)); 

            res.status(200).json({
                status: 'New name added',
                obj
            })
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}); 

module.exports = router;