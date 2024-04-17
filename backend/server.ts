import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '..', 'frontend'), {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.ts')) {
            res.setHeader('Content-Type', 'text/javascript');
        }
    }
}));

// Your other server configurations and routes...

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

