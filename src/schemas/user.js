import mongoose from 'mongoose';
const { Schema } = mongoose;

const user = new Schema({
  stats: [{type: Object, default: {
    kills: 0,
    wins: 0,
  }}],
});
