function logTime(req, res, next) {
    // console.log('In LogTime: ', req); 
    let date = new Date(); 
    req.datePosted = date.toLocaleDateString(); // creating a string for our local date. 

    // console.log('LogTime - DatePosted: ', req.datePosted);
    next(); 
}

module.exports = {
    logTime: logTime,
    // xVariable: x
}; // what we're exporting is an object!
