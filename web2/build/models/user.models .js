"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.models%20.js.map