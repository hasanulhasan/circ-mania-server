"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInnings = exports.deleteInnings = exports.getOneInnings = exports.getInnings = exports.createInningsToDB = void 0;
const innings_model_1 = require("./innings.model");
const createInningsToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const innings = new innings_model_1.Innings(payload);
    yield innings.save();
    return innings;
});
exports.createInningsToDB = createInningsToDB;
const getInnings = () => __awaiter(void 0, void 0, void 0, function* () {
    const innings = yield innings_model_1.Innings.find({});
    return innings;
});
exports.getInnings = getInnings;
const getOneInnings = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const innings = yield innings_model_1.Innings.findById(id);
    return innings;
});
exports.getOneInnings = getOneInnings;
const deleteInnings = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const innings = yield innings_model_1.Innings.findByIdAndDelete(id);
    return innings;
});
exports.deleteInnings = deleteInnings;
const updateInnings = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const innings = yield innings_model_1.Innings.findOneAndUpdate({ _id: id }, payload, { new: true });
    return innings;
});
exports.updateInnings = updateInnings;
