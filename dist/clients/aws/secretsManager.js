"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_secrets_manager_1 = require("@aws-sdk/client-secrets-manager");
const config_1 = require("./config");
const constants_1 = require("../../utils/constants");
const getSecretsManagerClient = (options) => {
    return new client_secrets_manager_1.SecretsManagerClient(Object.assign({ region: constants_1.region, credentials: config_1.awsProvider }, options));
};
exports.default = {
    getSecretsManagerClient,
};
//# sourceMappingURL=secretsManager.js.map