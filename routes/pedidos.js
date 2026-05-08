import { Router } from 'express';

const router = Router();

router.post('/criar-pagamento', (req, res) => {
  res.status(501).json({
    message: 'Rota de criacao de pagamento ainda nao implementada.'
  });
});

export default router;
