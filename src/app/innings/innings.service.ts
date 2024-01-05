import IInnings from "./innings.interface";
import { Innings } from "./innings.model";

export const createInningsToDB = async (payload: IInnings): Promise<IInnings>=> {
  const innings = new Innings(payload)
  await innings.save();
  return innings
}

export const getInnings = async ()=> {
  const innings = await Innings.find({});
  return innings;
}

export const getOneInnings = async (id: string)=> {
  const innings = await Innings.findById(id);
  return innings;
}

export const deleteInnings = async (id: string)=> {
  const innings = await Innings.findByIdAndDelete(id);
  return innings;
}

export const updateInnings = async (id: string, payload:Partial<IInnings>)=> {
  const innings = await Innings.findOneAndUpdate({_id: id}, payload, {new:true});
  return innings;
}
