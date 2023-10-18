import mongoose from "mongoose";

const ImoveisSchema = new mongoose.Schema({
  rented: {
    type: String,
    required: true
  },
  area: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  newHouse: {
    type: String,
    default: true
  },
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  imageUrls: {
    type: String,
    required: true
  },
  garage: {
    type: Number,
    required: true
  },
  typeHouse: {
    type: String,
    required: true
  },
  bathroom: {
    type: Number,
    required: true
  },
  contactName: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  contactPhone: {
    type: String,
    required: true
  },
  selectedDate: {
    type: String,
    required: true
  },
  contactAddress: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Imoveis = mongoose.model("Imoveis", ImoveisSchema);
