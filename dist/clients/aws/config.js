"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awsProvider = void 0;
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
exports.awsProvider = (0, credential_provider_node_1.defaultProvider)({
    maxRetries: 5,
    timeout: 2000,
});
//# sourceMappingURL=config.js.map