// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { getAxiosConfigWithDefaultsWithoutMethod } = require('@sap-cloud-sdk/http-client/dist/http-client');


// moment.tz.setDefault('America/Bogota');


// const job = new CronJob(
//     '* 30 10 * * *',
//     async () => {
//         console.log('hola')
//         let ordensrv = new GtaConService()
//         let orden = await ordensrv.ApiOrderServicios()
//         for (let datos of orden.d.results)
//             for (let datosdos of datos.to_ReferenceObject.results)
                

//                 cds.run(INSERT.into('APP_CAP_GTA_PROYORDER').entries({
    
                    
//                     serviceOrder: datos.ServiceOrder,
//                     purchaseOrderByCustomer: datos.PurchaseOrderByCustomer,
//                     serviceOrderDescription: datos.ServiceOrderDescription,                        
//                     soldToParty: datos.SoldToParty,
//                     serviceReferenceEquipment: datosdos.ServiceReferenceEquipment,
//                     serviceRefFunctionalLocation: datosdos.ServiceRefFunctionalLocation,    
//                     tipoProyecto: "SRV",
                    
//                 }));
//     },
// null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;

//////

// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');  
// const cds = require('@sap/cds');  


// moment.tz.setDefault('America/Bogota');

// const job = new CronJob(
//     '* 51 3 * * *',  
//     async () => {
//         console.log('Iniciando el trabajo programado...');

       
//         let ordensrv = new GtaConService();
//         let orden = await ordensrv.ApiOrderServicios();

  
//         for (let datos of orden.d.results) {
//             for (let datosdos of datos.to_ReferenceObject.results) {
//                 await cds.run(INSERT.into('APP_CAP_GTA_PROYORDER').entries({
//                     serviceOrder: datos.ServiceOrder,
//                     purchaseOrderByCustomer: datos.PurchaseOrderByCustomer,
//                     serviceOrderDescription: datos.ServiceOrderDescription,
//                     soldToParty: datos.SoldToParty,
//                     serviceReferenceEquipment: datosdos.ServiceReferenceEquipment,
//                     serviceRefFunctionalLocation: datosdos.ServiceRefFunctionalLocation,
//                     tipoProyecto: "SRV", 
//                 }));
//             }
//         }

//         try {
//             let proyectosResponse = await ordensrv.ApiProyectos();
            
        
//             for (let proyecto of proyectosResponse.d.results) {
//                 await cds.run(INSERT.into('APP_CAP_GTA_PROYORDER').entries({
//                     serviceOrder: proyecto.PspidEdit,                   // PspidEdit -> serviceOrder
//                     serviceOrderDescription: proyecto.Post1,            // Post1 -> serviceOrderDescription
//                     serviceRefFunctionalLocation: proyecto.Werks,       // Werks -> serviceRefFunctionalLocation
//                     tipoProyecto: "PROY",                              
//                 }));
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
