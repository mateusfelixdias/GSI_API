import { House } from '../../model';
import { Request, Response } from 'express';

const extractHouseData = ({ body }: Request) => {
  const {
    area,
    price,
    rooms,
    rented,
    garage,
    address,
    comment,
    newHouse,
    bathroom,
    imageUrls,
    typeHouse,
    contactName,
    contactEmail,
    neighborhood,
    contactPhone,
    selectedDate,
    contactAddress,
  } = body;

  return {
    area,
    rooms,
    price,
    rented,
    garage,
    address,
    comment,
    newHouse,
    bathroom,
    imageUrls,
    typeHouse,
    contactName,
    contactEmail,
    neighborhood,
    contactPhone,
    selectedDate,
    contactAddress,
  };
};

export const HousesController = {
  store: async (req: Request, res: Response) => {
    try {
      const houseData = extractHouseData(req);
      const createdHouse = await House.create(houseData);
      res.status(201).json(createdHouse);
    } catch (error) {
      console.error(error);

      const message = 'Failed to create house';
      res.status(500).json({ message, error: error?.message });
    }
  },

  filter: async (req: Request, res: Response) => {
    try {
      const houseData = extractHouseData(req);

      const filter = {
        $or: [
          { rooms: houseData.rooms },
          { garage: houseData.garage },
          { rented: houseData.rented },
          { address: houseData.address },
          { newHouse: houseData.newHouse },
          { bathroom: houseData.bathroom },
          { typeHouse: houseData.typeHouse },
          { neighborhood: houseData.neighborhood },
          { area: { $lte: houseData.area, $gt: 0 } },
          { price: { $lte: houseData.price, $gt: 0 } },
        ],
      };

      const houses = await House.find(filter);
      res.status(200).json(houses);
    } catch (error) {
      const message = 'Failed to filter houses';
      res.status(500).json({ message, error: error?.message });
    }
  },

  index: async (_req: Request, res: Response) => {
    try {
      const houses = await House.find({});
      res.status(200).json(houses);
    } catch (error) {
      const message = 'Failed to fetch houses';
      res.status(500).json({ message, error: error?.message });
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const house = await House.findById(id);

      const messageNotFound = 'House not found';
      const message = messageNotFound;
      if (!house) return res.status(404).json({ message });

      res.status(200).json(house);
    } catch (error) {
      const message = 'Failed to fetch house';
      res.status(500).json({ message, error: error?.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const houseData = extractHouseData(req);

      const updateOptions = { new: true };
      const updatedHouse = await House.findByIdAndUpdate(
        id,
        houseData,
        updateOptions
      );

      const messageNotFound = 'House not found';
      const message = messageNotFound;
      if (!updatedHouse) return res.status(404).json({ message });

      res.status(200).json(updatedHouse);
    } catch (error) {
      console.log(error);
      const message = 'Failed to update house';
      res.status(500).json({ message, error: error?.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedHouses = await House.findByIdAndDelete(id);

      const messageNotFound = 'Houses not found';
      const message = messageNotFound;
      if (!deletedHouses) return res.status(404).json({ message });

      res.status(204).end();
    } catch (error) {
      const message = 'Failed to delete houses';
      res.status(500).json({ message, error: error?.message });
    }
  },
};
