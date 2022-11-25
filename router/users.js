const express = require('express')
const router = express.Router()

const usercontroller = require("../controllers/user")

router.get('/users', usercontroller.index)
// Memanggil const user, const user berisi data id, nama, email

router.get('/user/:id', usercontroller.show)

router.post('/user', usercontroller.store)
// kalau url nya /user dia akan menampilkan pesan 'Got a POST request'

router.put('/user/:id',usercontroller.update )
// kalau urlnya /user/:id yang pingin kita ubah datanya -> mengupdate data
// menyimpan perubahan data tertentu dengan id ..

router.delete('/user/:id', usercontroller.delete)
// delete, ini juga sama kaya update (put)

module.exports = router

