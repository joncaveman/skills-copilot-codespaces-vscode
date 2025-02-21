// Create a web server
// Create a web server that responds to a request to /comments with a JSON object.
// The JSON object should have a key comments that contains an array of comments (strings).
// The comments array should have at least 3 comments in it.

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
    res.json({
        comments: [
            'This is the first comment',
            'This is the second comment',
            'This is the third comment'
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
