import { Request, Response } from "express";
import { createInningsToDB, deleteInnings, getInnings, getOneInnings, updateInnings } from "./innings.service";

export const createInningsIntoDB = async (req: Request, res: Response)=> {
  const data = req.body;
  const innings =await createInningsToDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: innings
    }
  )
  console.log('innings created successful')
}

export const getAllInnings = async (req: Request, res: Response) => {
  const innings = await getInnings();
  res.status(200).json(
    {
      status: 'success',
      data: innings
    }
  )
  console.log(`${innings.length} innings fetched`)
}

export const getSingleInnings = async (req: Request, res: Response) => {
  const id = req.params.id;
  const innings = await getOneInnings(id);
  res.status(200).json(
    {
      status: 'success',
      data: innings
    }
  )
  console.log(`innings fetched`)
}

export const deleteSingleInnings = async (req: Request, res: Response) => {
  const id = req.params.id;
  const innings = await deleteInnings(id);
  res.status(200).json(
    {
      status: 'success',
      data: innings
    }
  )
  console.log('innings deleted')
}

export const updateSingleInnings = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const innings = await updateInnings(id,updatedData);
  res.status(200).json(
    {
      status: 'success',
      data: innings
    }
  )
  console.log('innings updated')
}