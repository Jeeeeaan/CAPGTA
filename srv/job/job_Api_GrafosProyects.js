// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { getAxiosConfigWithDefaultsWithoutMethod } = require('@sap-cloud-sdk/http-client/dist/http-client');

// moment.tz.setDefault('America/Bogota');

// const { v4: uuidv4 } = require('uuid');  

// const job = new CronJob(
//     '* 15 1 * * *', 
//     async () => {
//         console.log('Inicio carga de datos');

//         let proyectosData = await cds.run(SELECT.from('APP_CAP_GTA_GRAFPROYECTS').columns('PROJECTNETWORK'));

//         if (proyectosData.length === 0) {
//             console.log('No se encontraron valores en la tabla APP_CAP_GTA_GRAFPROYECTS.');
//             return; 
//         }

//         let ordensrv = new GtaConService();

//         for (let proyecto of proyectosData) {
//             let projectNetwork = proyecto.PROJECTNETWORK;

//             let url = `/http/get_EamProyectos/ProjectNetworkActivity?$filter=(ProjectNetwork eq '${projectNetwork}')&$expand=_ProjectNetworkActivityStatus&sap-client=110`;

//             try {
//                 let proyectosResponse = await ordensrv.ActividadesProyectos(url);

//                 // 6. Eliminar duplicados de la respuesta usando el filtro
//                 let uniqueProyectos = proyectosResponse.value.filter((value, index, self) => 
//                     index === self.findIndex((t) => (
//                         t.NetworkActivity === value.NetworkActivity && t.ProjectNetwork === value.ProjectNetwork
//                     ))
//                 );

//                 for (let proyecto of uniqueProyectos) {
//                     // Verificación de duplicados
//                     let existingRecord = await cds.run(
//                         SELECT.one.from('APP_CAP_GTA_PROYECTSACTIVITIES')
//                         .where({ NETWORKACTIVITY: proyecto.NetworkActivity, PROJECTNETWORK_PROJECTNETWORK: proyecto.ProjectNetwork })
//                     );

//                     if (!existingRecord) {
//                         // Si no existe, insertar el registro
//                         await cds.run(INSERT.into('APP_CAP_GTA_PROYECTSACTIVITIES').entries({
//                             ID: uuidv4(),
//                             NETWORKACTIVITY: proyecto.NetworkActivity,
//                             NETWORKACTIVITYDESCRIPTION: proyecto.NetworkActivityDescription,
//                             PROJECTNETWORK_PROJECTNETWORK: proyecto.ProjectNetwork || "Sin descripción",  
//                         }));
//                         console.log(`Registro insertado: ${proyecto.NetworkActivity} para el proyecto ${proyecto.ProjectNetwork}`);
//                     } else {
//                         console.log(`El proyecto con NetworkActivity ${proyecto.NetworkActivity} y ProjectNetwork ${proyecto.ProjectNetwork} ya existe en la base de datos.`);
//                     }
//                 }
//             } catch (err) {
//                 console.error(`Error obteniendo los datos del proyecto ${projectNetwork}:`, err);
//             }
//         }

//     },
//     null,
//     true,
//     'America/Bogota'
// );
