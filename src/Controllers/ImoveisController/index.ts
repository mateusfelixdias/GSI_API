import { Request, Response } from 'express';
import { Imoveis } from "../../model";

export const ImoveisController = {
  // Função para criar um novo Imovel
  store: async (req: Request, res: Response) => {
    try {
      const {
        rented,
        area,
        address,
        comment,
        newHouse,
        price,
        rooms,
        imageUrls,
        garage,
        typeHouse,
        bathroom,
        contactName,
        contactEmail,
        neighborhood,
        contactPhone,
        selectedDate,
        contactAddress
      } = req.body;

      const newImovel = await Imoveis({
        rented,
        area,
        address,
        comment,
        newHouse,
        price,
        rooms,
        imageUrls,
        garage,
        typeHouse,
        bathroom,
        contactName,
        contactEmail,
        neighborhood,
        contactPhone,
        selectedDate,
        contactAddress
      });

      const createdImovel = await newImovel.save();

      res.status(201).json(createdImovel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Função para obter imoveis
  index: async (_req: Request, res: Response) => {
    try {
      const imoveis = await Imoveis.findOne();

      res.json(imoveis);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Função para obter um alimento pelo ID
  show: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const imoveis = await Imoveis.findById(id);

      if (!imoveis) {
        return res.status(404).json({ message: "Imovel not found" });
      }

      res.json(imoveis);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Função para atualizar um imovel pelo ID
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const {
        rented,
        area,
        address,
        comment,
        newHouse,
        price,
        rooms,
        imageUrls,
        garage,
        typeHouse,
        bathroom,
        contactName,
        contactEmail,
        neighborhood,
        contactPhone,
        selectedDate,
        contactAddress
      } = req.body;

      const updatedImoveis = await Imoveis.findByIdAndUpdate(
        id,
        {
          rented,
          area,
          address,
          comment,
          newHouse,
          price,
          rooms,
          imageUrls,
          garage,
          typeHouse,
          bathroom,
          contactName,
          contactEmail,
          neighborhood,
          contactPhone,
          selectedDate,
          contactAddress
        },
        { new: true }
      );

      if (!updatedImoveis) {
        return res.status(404).json({ message: "item not found" });
      }

      res.json(updatedImoveis);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Função para excluir imovel pelo ID
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const getItem = await Imoveis.findById(id);

      const deletedImovel = await Imoveis.findByIdAndDelete(id);

      if (!deletedImovel) {
        return res.status(404).json({ message: `item not found` });
      }

      res.json({ message: `${getItem?.address} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

