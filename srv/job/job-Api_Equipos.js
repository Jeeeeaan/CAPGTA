// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');


// moment.tz.setDefault('America/Bogota');


// const job = new CronJob(
//     '* 04 15 * * *',
//     async () => {
//         console.log('hola')
//         let gta = new GtaConService()
//         let equipos = await gta.ApiEquipos()
        
//         for (let equipo of equipos.d.results) {
            

//             cds.run(INSERT.into('APP_CAP_GTA_EQUIPMENT').entries({

//                 inventoryNumber: equipo.InventoryNumber,
//                 assetManufacturerName: equipo.AssetManufacturerName,
//                 manufacturerPartTypeName: equipo.ManufacturerPartTypeName,
//                 functionalLocation: equipo.FunctionalLocation,
//                 equipment: equipo.Equipment,
//                 technicalObjectType: equipo.TechnicalObjectType,
//                 puestotrabajo: "maquina"
                

//             }))
         
//         }

//     },
//     null,
//     true,
//     'America/Bogota'
// );


// module.exports = job;