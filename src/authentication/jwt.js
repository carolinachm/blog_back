const passport = require('passport');
const passportJwt = require('passport-jwt');
const config = require('../../config');
const UsuarioController = require('../main/controller/UsuarioController');

const jwtOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
    secretOrKey: config.get('authentication.token.secret'),
    issuer: config.get('authentication.token.issuer'),
    audience: config.get('authentication.token.audience')
};

passport.use(new passportJwt.Strategy(jwtOptions, (payload, done) => {
    const user = UsuarioController.getUserById(parseInt(payload.sub));
    if (user) {
        return done(null, user, payload);
    }
    return done();
}));
