"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOneTimeToken = generateOneTimeToken;
exports.hashToken = hashToken;
const crypto_1 = require("crypto");
function generateOneTimeToken() {
    const raw = (0, crypto_1.randomBytes)(32).toString('hex');
    return { raw, hash: hashToken(raw) };
}
function hashToken(raw) {
    return (0, crypto_1.createHash)('sha256').update(raw).digest('hex');
}
//# sourceMappingURL=token.util.js.map