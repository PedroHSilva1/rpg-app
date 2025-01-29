const express = require('express');
const { PrismaClient } = require('@prisma/client');
const raceRoutes = require('./routes/raceRoutes');

const app = express();
const prisma = new PrismaClient();
const PORT = 3001;

app.use(express.json());

app.use('/api', raceRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});