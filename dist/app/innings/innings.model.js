"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Innings = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    run: { type: Number, required: true },
    wicket: { type: Number, required: true },
    over: { type: Number, required: true },
});
exports.Innings = (0, mongoose_1.model)('Innings', exports.ProductSchema);
