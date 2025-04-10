// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { getAxiosConfigWithDefaultsWithoutMethod } = require('@sap-cloud-sdk/http-client/dist/http-client');

// moment.tz.setDefault('America/Bogota');

// const job = new CronJob(
//     '* 30 18 * * *',
//     async () => {
//         console.log('Inicio carga de datos');

//         // Llamada al servicio para obtener los proyectos (en lugar de las órdenes de servicio)
//         let ordensrv = new GtaConService();
//         let proyectosResponse = await ordensrv.ApiProyectos();  // Asumiendo que 'ApiProyectos' obtiene los proyectos
        
//         // Iterar sobre los proyectos y realizar la inserción
//         for (let proyecto of proyectosResponse.d.results) {
//             await cds.run(INSERT.into('APP_CAP_GTA_PROYECTS').entries({
//                 PspidEdit: proyecto.PspidEdit,                         // Mapeo de PspidEdit -> serviceOrder
//                 Post1: proyecto.Post1,                   // Mapeo de Post1 -> serviceOrderDescription
//                 Werks: proyecto.Werks,              // Mapeo de Werks -> serviceRefFunctionalLocation
//                 tipoProyecto: "PROY",                                       // Tipo de proyecto 'PROY'
//             }));
//         }

//     },
//     null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;
