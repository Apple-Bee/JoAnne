const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '..', 'frontend'), {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.ts')) {
            res.setHeader('Content-Type', 'text/javascript');
        }
    }
}));

// Other server configurations...

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
