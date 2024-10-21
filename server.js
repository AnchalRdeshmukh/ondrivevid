// server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Serve static files from the public directory
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get video URLs
app.get('/api/videos', (req, res) => {
    const videos = [
        // Updated OneDrive embed URL for the first video
        "https://artiset907-my.sharepoint.com/personal/artiset_spoc_artiset907_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=0f038ff1-c122-4456-8648-a10b08a2ba17&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
        "https://artiset907-my.sharepoint.com/personal/artiset_spoc_artiset907_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=bf563ffe-66f1-49a0-8869-5124c58cdb49&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"

    ];
    res.json(videos);
});
// Serve the index.html file from the root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});