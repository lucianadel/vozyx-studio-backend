import { MercadoPagoConfig } from 'mercadopago';

const { MERCADO_PAGO_ACCESS_TOKEN } = process.env;

if (!MERCADO_PAGO_ACCESS_TOKEN) {
  throw new Error('MERCADO_PAGO_ACCESS_TOKEN nao configurado.');
}

export const mercadoPagoClient = new MercadoPagoConfig({
  accessToken: MERCADO_PAGO_ACCESS_TOKEN
});
