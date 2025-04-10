
// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const axios = require('axios'); 

// moment.tz.setDefault('America/Bogota');

// const job = new CronJob(
//     '* 10 18 * * *',
//     async () => {
//         console.log('Iniciando el trabajo cron');

//         let operacionMTTO = new GtaConService();
//         let orden = await operacionMTTO.ApiOperacionMTTO(); 
//         var i = 10;
        
//         for (let MTTO of orden.d.results) {
//             for (let mantenimiento of MTTO.to_MaintenanceOrderOperation.results) {

//                 try {
//                     let workCenter = mantenimiento.WorkCenter;
//                     let plant = mantenimiento.Plant;
                    
//                     const url = `https://cpi-t72tpkjc.it-cpi019-rt.cfapps.us10-002.hana.ondemand.com/http/get_EamConsultarPersona/workcenterTypeSet(Arbpl='${workCenter}',Werks='${plant}')?sap-client=110&$format=json`;

//                     let puestoTrabajoResponse = await operacionMTTO.ApiPuestoTrabajo(url);

//                     if (puestoTrabajoResponse && puestoTrabajoResponse.d && puestoTrabajoResponse.d.Txt) {
//                         let txt = puestoTrabajoResponse.d.Txt; 
//                         console.log('Txt:', txt);  


//                         await cds.run(INSERT.into('APP_CAP_GTA_OPERMAINT').entries({
//                             ID: '1' + i + 'ce5',
//                             Center: mantenimiento.WorkCenter,
//                             MAINTENANCEORDER_AUFNR: MTTO.MaintenanceOrder,
//                             maintenanceOrderOperation: mantenimiento.MaintenanceOrderOperation,
//                             operationDescription: mantenimiento.OperationDescription,
//                             operationPersonResponsible: mantenimiento.OperationPersonResponsible,
//                             plant: mantenimiento.Plant,
//                             puestotrabajo: txt 
//                         }));
//                     } else {
//                         console.log(`No se encontró Txt para WorkCenter: ${workCenter} y Plant: ${plant}`);
//                         let txt = 'X';

//                         await cds.run(INSERT.into('APP_CAP_GTA_OPERMAINT').entries({
//                             ID: '1' + i + 'ce5',
//                             Center: mantenimiento.WorkCenter,
//                             MAINTENANCEORDER_AUFNR: MTTO.MaintenanceOrder,
//                             maintenanceOrderOperation: mantenimiento.MaintenanceOrderOperation,
//                             operationDescription: mantenimiento.OperationDescription,
//                             operationPersonResponsible: mantenimiento.OperationPersonResponsible,
//                             plant: mantenimiento.Plant,
//                             puestotrabajo: txt 
//                         }));
//                     }

//                     i++; 

//                 } catch (error) {
//                     console.error('Error al obtener Txt de la API de puesto de trabajo o en la inserción:', error);
//                 }
//             }
//         }

//         // try {
//         //     let actividadesProyectosResponse = await operacionMTTO.ActividadesProyectos(); 


//         //     for (let actividad of actividadesProyectosResponse.d.results) {

//         //         await cds.run(INSERT.into('APP_CAP_GTA_OPERMAINT').entries({
//         //             ID: '2' + i + 'ce5',  
//         //             MAINTENANCEORDER_AUFNR: actividad.MaintenanceOrder,  
//         //             operationDescription: actividad.MaintenanceOrderDesc,  
//         //             maintenanceOrderOperation: actividad.NetworkActivity
//         //         }));

//         //         i++;
//         //     }
//         // } catch (err) {
//         //     console.error('Error al obtener actividades de la API ActividadesProyectos:', err);
//         // }

//     },
//     null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;

// //////////////////////////////////////////////

