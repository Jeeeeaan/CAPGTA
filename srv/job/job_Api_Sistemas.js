// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');


// moment.tz.setDefault('America/Bogota');

// const job = new CronJob(
//   '* 48 16 * * *',
//   async () => {

//       var equipo = await cds.run(SELECT.from('APP_CAP_GTA_EQUIPMENT').columns('ID', 'CATALOG_PROFILE'));
//       setTimeout( async () => { //esta
//       console.log('hola '+equipo)
//       let gtaca = new GtaConService()
//       let body = await gtaca.ApiVehiculo();
//       var i = 1000;
//       for (let bodywork of body.value) {
//           var y = null;
//           for (const equipos of equipo) {

//               console.log('sys '+equipo.catalog_profile);
//               if(bodywork.catalog_profile == sistema.sistype){
//                   y = sistema.ID
//               }
//           }



//           cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({
//               ID:  '1'+i+'ce5-004b-40ef-a66e-562a85dde69d', //esta tambien            
//               damageID: bodywork.MaintNotifOvwDamageCode,
//               equipment_type: bodywork.MaintNotifOvwDamageCodeGroup,
//               descripcion: bodywork.MaintNotifOvwDamageCtlgCodeTxt,
//               sistemas_ID: y //esta 
//           }));
//           i++;

//       }
//       console.log('terminado');
//       }, 2000);//esta
//   },    
//   null,
//   true,
//   'America/Bogota'
// );



// const job = new CronJob(
//   '* 40 14 * * *',
//   async () => {
//     console.log('hola')
//     let gtasist = new GtaConService()
//     let sistHilux = await gtasist.ApiSistemasHilux();
//     var i = 1000;
//     for (let sis of sistHilux.d.results) {
//       cds.run(INSERT.into('APP_CAP_GTA_SISTEMAS').entries({
//         ID:  i + '4ef',
//         posicion: sis.Posicion,
//         sitema: sis.Sistema,
//         descripcion: sis.Descripcion,        
//         CatalogProfile_inventoryNumber: sis.Perfil
//       }));
//       i++;
//     }

//     let sistRetro = await gtasist.ApiSistemasRetro();
//     var i = 1000;
//     for (let sis of sistRetro.d.results) {
//       cds.run(INSERT.into('APP_CAP_GTA_SISTEMAS').entries({
//         ID: '1'+ i + '4ef',
//         posicion: sis.Posicion,
//         sitema: sis.Sistema,
//         descripcion: sis.Descripcion,       
//         CatalogProfile_inventoryNumber: sis.Perfil
//       }));
//       i++;
//       console.log('fin')
//     }
//   },
//   null,
//   true,
//   'America/Bogota'
// );

// module.exports = job;


