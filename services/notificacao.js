const formatarCampo = (label, valor) => `${label}: ${valor || 'Nao informado'}`;

export function gerarMensagemAdmin(pedido) {
  return [
    'Novo pedido recebido - Vozyx Studio',
    '',
    formatarCampo('Nome', pedido?.nome),
    formatarCampo('WhatsApp', pedido?.whatsapp),
    formatarCampo('Email', pedido?.email),
    formatarCampo('Tipo de musica', pedido?.tipoMusica),
    formatarCampo('Estilo musical', pedido?.estiloMusical),
    formatarCampo('Tipo de voz', pedido?.tipoVoz),
    formatarCampo('Historia', pedido?.historia),
    formatarCampo('Observacoes', pedido?.observacoes)
  ].join('\n');
}
