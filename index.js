import express from 'express';
import { generate } from 'youtube-po-token-generator';

const app = express();
const PORT = 3000;

// Define the API route
app.get('/get-data', async (req, res) => {
  try {
    const result = await generate();
    res.json(result);
  } catch (error) {
    console.error('Error generating tokens:', error);
    res.status(500).json({ error: 'Failed to generate tokens' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
