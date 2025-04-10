// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');


// moment.tz.setDefault('America/Bogota');


// const job = new CronJob(
//     '* 27 9 * * *',
//     async () => {
//         console.log('hola')
//         let gta = new GtaConService()
//         let emple = await gta.ApiEmpleado()
        
//         for (let empleado of emple.d.results) {
            

//             cds.run(INSERT.into('APP_CAP_GTA_EMPLOYEE').entries({

//                 Pernr: empleado.Pernr,
//                 Bukrs: empleado.Bukrs,
//                 Werks: empleado.Werks,
//                 Persk: empleado.Persk,
//                 Sname: empleado.Sname,
//                 Ename: empleado.Ename,
//                 puestotrabajo: "persona"
                

//             }))
         
//         }

//     },
//     null,
//     true,
//     'America/Bogota'
// );
