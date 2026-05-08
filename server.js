import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import pedidosRoutes from './routes/pedidos.js';
import webhookRoutes from './routes/webhook.js';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'online' });
});

app.use(pedidosRoutes);
app.use(webhookRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
