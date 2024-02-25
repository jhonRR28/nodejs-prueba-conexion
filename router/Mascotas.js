const express = require('express');
const router = express.Router();
const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    try {
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
            // arrayMascotas:  [
            //     {id: 'jdjdjd', nombre: 'rex', descripcion: 'rex descripcion'},
            //     {id: 'jajaja', nombre: 'max', descripcion: 'max descripcion'},
            // ]
        })

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;