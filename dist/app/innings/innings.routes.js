"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inningsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const innings_controller_1 = require("./innings.controller");
const innings_service_1 = require("./innings.service");
const router = express_1.default.Router();
router.get('/:id', innings_controller_1.getSingleInnings);
router.patch('/:id', innings_controller_1.updateSingleInnings);
router.delete('/:id', innings_service_1.deleteInnings);
router.get('/', innings_controller_1.getAllInnings);
router.post('/create-innings', innings_controller_1.createInningsIntoDB);
exports.inningsRoutes = router;
