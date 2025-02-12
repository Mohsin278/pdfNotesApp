module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['abc123xyz456', 'def789uvw012']), // Moved inside `app`
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'yourAdminJWTSecret'),
    },
  },
});