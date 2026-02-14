import express, { Router } from 'express';

const app = express();
const router = Router();

// Middleware
app.use(express.json());

// Define Routes
router.get('/', (req, res) => {
  res.json({ message: 'Hello from Express + TypeScript on Netlify!' });
});

router.get('/data', (req, res) => {
  res.json({ 
    id: 1, 
    name: 'Test Data', 
    timestamp: new Date() 
  });
});

// Mount router at a specific path
// Netlify functions usually run under /.netlify/functions/api
app.use('/.netlify/functions/api', router);

// Also mount at root for local development convenience
app.use('/', router);

export default app;