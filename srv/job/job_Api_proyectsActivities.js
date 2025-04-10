// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { getAxiosConfigWithDefaultsWithoutMethod } = require('@sap-cloud-sdk/http-client/dist/http-client');

// moment.tz.setDefault('America/Bogota');

// const job = new CronJob(
//     '* 16 19 * * *',
//     async () => {
//         console.log('Inicio carga de datos');

//         let ordensrv = new GtaConService();
//         let proyectosResponse = await ordensrv.ActividadesProyectos();  
        
       
//         for (let proyecto of proyectosResponse.value) {
//             await cds.run(INSERT.into('APP_CAP_GTA_PROYECTSACTIVITIES').entries({
                
//                 ID: UUID,
//                 NETWORKACTIVITY: proyecto.NetworkActivity,                   
//                 NETWORKACTIVITYDESCRIPTION : proyecto.NetworkActivityDescription,                  
//                 PROJECTNETWORK_PROJECTNETWORK : proyecto.ProjectNetwork || "Sin descripción",  // ProjectNetworkDescription -> serviceDocItemId, valor predeterminado si está vacío 
//             }));
//         }

//     },
//     null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;

// ////


