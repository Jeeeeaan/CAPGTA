// // const { CronJob } = require('cron');
// // const moment = require('moment-timezone');
// // const { GtaConService } = require('../conexionApi');
// // const cds = require('@sap/cds');


// // moment.tz.setDefault('America/Bogota');


// // const job = new CronJob(
// //     '* 11 7 * * *', 
// //     async () => {
// //         console.log('Iniciando el trabajo programado...');

        
// //         let grafos = new GtaConService();

        
// //         let actividades = await grafos.ApiGrafos();

        
// //         for (let act of actividades.d.results) {
// //             await cds.run(INSERT.into('APP_CAP_GTA_GRAFORDER').entries({
// //                 aufnr: act.Aufnr,
// //                 SERVICEDOCID_SERVICEORDER: act.ServiceDocId,
// //                 serviceDocItemId: act.ServiceDocItemId,
// //             }));
// //         }

       
// //         try {
// //             let proyectosResponse = await grafos.ApiPGrafosProyectos();
            
// //             for (let proyecto of proyectosResponse.value) {
// //                 await cds.run(INSERT.into('APP_CAP_GTA_GRAFORDER').entries({
// //                     aufnr: proyecto.ProjectNetwork,                   // ProjectNetwork -> aufnr
// //                     SERVICEDOCID_SERVICEORDER: proyecto.ProjectExternalID,  // ProjectExternalID -> SERVICEDOCID_SERVICEORDER
// //                     serviceDocItemId: proyecto.ProjectNetworkDescription || "Sin descripción",  // ProjectNetworkDescription -> serviceDocItemId, valor predeterminado si está vacío
// //                 }));
// //             }
// //         } catch (err) {
// //             console.error('Error al obtener proyectos:', err);
// //         }
// //     },
// //     null,
// //     true,
// //     'America/Bogota'  
// // );

// // module.exports = job;


// ///////////////////


// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const axios = require('axios');

// moment.tz.setDefault('America/Bogota');

// const job = new CronJob(
//     '* 55 8 * * *', 
//     async () => {
//         console.log('Iniciando el trabajo programado...');

//         let grafos = new GtaConService();
//         let actividades = await grafos.ApiGrafos();

//         var i = 10;
      
//         for (let act of actividades.d.results) {
//             await cds.run(INSERT.into('APP_CAP_GTA_GRAFORDER').entries({
//                 aufnr: act.Aufnr,
//                 SERVICEDOCID_SERVICEORDER: act.ServiceDocId,
//                 serviceDocItemId: act.ServiceDocItemId,
//             }));
//         }

//         try {
//             let proyectosResponse = await grafos.ApiPGrafosProyectos();

            
//             for (let proyecto of proyectosResponse.value) {
//                 await cds.run(INSERT.into('APP_CAP_GTA_GRAFORDER').entries({
//                     aufnr: proyecto.ProjectNetwork,                   // ProjectNetwork -> aufnr
//                     SERVICEDOCID_SERVICEORDER: proyecto.ProjectExternalID,  // ProjectExternalID -> SERVICEDOCID_SERVICEORDER
//                     ProjectNetworkDescription: proyecto.ProjectNetworkDescription || "Sin descripción",  // ProjectNetworkDescription -> serviceDocItemId, valor predeterminado si está vacío 
//                 }));

               
//                 const url = `https://cpi-t72tpkjc.it-cpi019-rt.cfapps.us10-002.hana.ondemand.com/http/get_EamProyectos/ProjectNetworkActivity?$filter=(ProjectNetwork eq '${aufnr}')&$expand=_ProjectNetworkActivityStatus&sap-client=110`;

//                 try {
                  
//                     const response = await axios.get(url, {
//                         headers: {
//                             'Authorization': 'Basic c2ItZjc0YjA0YmQtNDE1ZS00Y2U0LTg3NjMtYjJiYTZjOGU2MzJkIWIzMjI1OTh8aXQtcnQtY3BpLXQ3MnRwa2pjIWI1NjE4NjpkMzk1ZmExMy0xOTVhLTQyYjMtYTNiMi0yMjg5MDIxNjhmZjAkZ0JSX2VXeHdscnBGRUlqeVphaTZqclRlRFhUeXk5aU94dmJpOFRWc1VXdz0',
//                             'Content-Type': 'application/json',
//                         }
//                     });

                
//                     for (let actividad of response.data.value) {
//                         await cds.run(INSERT.into('APP_CAP_GTA_OPERMAINT').entries({
//                             ID: '2' + i + 'ce5',  
//                             MAINTENANCEORDER_AUFNR: proyecto.ProjectNetwork,  
//                             operationDescription: actividad.NetworkActivityDescription, 
//                             maintenanceOrderOperation: actividad.NetworkActivity,
//                         }));
//                     }

//                     i++

//                 } catch (err) {
//                     console.error(`Error al obtener actividades para el 'aufnr': ${projectNetwork}`, err);
//                 }
//             }
//         } catch (err) {
//             console.error('Error al obtener proyectos:', err);
//         }
//     },
//     null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;
