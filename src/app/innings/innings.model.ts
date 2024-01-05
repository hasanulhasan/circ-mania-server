import { Schema, model } from "mongoose";
import IInnings from "./innings.interface";

export const ProductSchema = new Schema<IInnings>({
  run: { type: Number, required: true },
  wicket: { type: Number, required: true },
  over: { type: Number, required: true },
});

export const Innings = model<IInnings>('Innings', ProductSchema);