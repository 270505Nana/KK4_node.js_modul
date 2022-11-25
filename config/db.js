// dipakai untuk menyimpan koneksi ke db

// getting-started.js
const mongoose = require('mongoose');

const mongoDB = async function main() {
  await mongoose.connect('mongodb://localhost:27017/praktikumkk4c');//follow ur database
  console.log('DB connected') //message
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  // mongoDB insial
}

  // karena modul ini dipakai difile lain,jadi ada exportnya
  module.exports = mongoDB