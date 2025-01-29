const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// Rota para obter todas as raças
router.get('/races', async (req, res) => {
  try {
    const races = await prisma.race.findMany();
    const formattedRaces = races.map(race => ({
      id: race.id,
      name: race.name,         // Certifique-se de usar "name"
      description: race.description, // E "description"
      image: race.image || null,     // Inclua "image" se existir
    }));
    res.json(formattedRaces);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar raças' });
  }
});

router.get('/subraces/:raceId', async (req, res) => {
  const { raceId } = req.params;
  try {
    const subRaces = await prisma.subRace.findMany({
      where: { race_id: parseInt(raceId) },
    });
    const formattedSubRaces = subRaces.map(subRace => ({
      id: subRace.id,
      name: subRace.name,         // Certifique-se de usar "name"
      description: subRace.description, // E "description"
      image: subRace.image || null,     // Inclua "image" se existir
    }));
    res.json(formattedSubRaces);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar sub-raças' });
  }
});

module.exports = router;
