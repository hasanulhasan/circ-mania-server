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
exports.updateSingleInnings = exports.deleteSingleInnings = exports.getSingleInnings = exports.getAllInnings = exports.createInningsIntoDB = void 0;
const innings_service_1 = require("./innings.service");
const createInningsIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const innings = yield (0, innings_service_1.createInningsToDB)(data);
    res.status(200).json({
        status: 'success',
        data: innings
    });
    console.log('innings created successful');
});
exports.createInningsIntoDB = createInningsIntoDB;
const getAllInnings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const innings = yield (0, innings_service_1.getInnings)();
    res.status(200).json({
        status: 'success',
        data: innings
    });
    console.log(`${innings.length} innings fetched`);
});
exports.getAllInnings = getAllInnings;
const getSingleInnings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const innings = yield (0, innings_service_1.getOneInnings)(id);
    res.status(200).json({
        status: 'success',
        data: innings
    });
    console.log(`innings fetched`);
});
exports.getSingleInnings = getSingleInnings;
const deleteSingleInnings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const innings = yield (0, innings_service_1.deleteInnings)(id);
    res.status(200).json({
        status: 'success',
        data: innings
    });
    console.log('innings deleted');
});
exports.deleteSingleInnings = deleteSingleInnings;
const updateSingleInnings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const innings = yield (0, innings_service_1.updateInnings)(id, updatedData);
    res.status(200).json({
        status: 'success',
        data: innings
    });
    console.log('innings updated');
});
exports.updateSingleInnings = updateSingleInnings;
