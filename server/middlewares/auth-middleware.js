const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (request, response, next) {
    try {
        const authorizationHeader = request.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.AnauthorizedError());
        }

        const accessToken = authorizationHeader.split('')[1]; //('') - It's bearer; [1] - token
        if (!accessToken) {
            return next(ApiError.AnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.AnauthorizedError());
        }

        request.user = userData;
        next();
    } catch (error) {
        return next(ApiError.AnauthorizedError());
    }
};
