import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ?? 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Serve index.html explicitly
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
    console.log(`Serving files from: ${path.join(__dirname, 'public')}`);
});
