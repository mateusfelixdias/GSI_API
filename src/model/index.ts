import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
  rented: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  newHouse: {
    type: String,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  imageUrls: {
    default: [],
    required: false,
    type: [{ imageUrl: String, imageName: String }],
  },
  garage: {
    type: Number,
    required: true,
  },
  typeHouse: {
    type: String,
    required: true,
  },
  bathroom: {
    type: Number,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
    required: true,
  },
  selectedDate: {
    default: '',
    type: String,
    required: false,
  },
  contactAddress: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const House = mongoose.model('Houses', HouseSchema);
