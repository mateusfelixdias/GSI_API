import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
  rented: {
    trim: true,
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  address: {
    trim: true,
    type: String,
    required: true,
  },
  comment: {
    trim: true,
    type: String,
    required: true,
  },
  newHouse: {
    trim: true,
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
    trim: true,
    type: String,
    required: true,
  },
  bathroom: {
    type: Number,
    required: true,
  },
  contactName: {
    trim: true,
    type: String,
    required: true,
  },
  contactEmail: {
    trim: true,
    type: String,
    required: true,
  },
  neighborhood: {
    trim: true,
    type: String,
    required: true,
  },
  contactPhone: {
    trim: true,
    type: String,
    required: true,
  },
  selectedDate: {
    trim: true,
    default: '',
    type: String,
    required: false,
  },
  contactAddress: {
    trim: true,
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const House = mongoose.model('Houses', HouseSchema);
