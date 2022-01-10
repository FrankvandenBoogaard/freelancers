module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7848b80eb67be6bfb57df97dc3c40995'),
  },
});
