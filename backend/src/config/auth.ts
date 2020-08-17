export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default', // a string default foi colocada aqui pra não dar erros nos teste, caso o secret esteja vazio
    expiresIn: '1d',
  },
};
