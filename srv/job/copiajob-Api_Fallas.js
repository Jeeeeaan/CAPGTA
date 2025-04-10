// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { FORMERR } = require('dns');


// moment.tz.setDefault('America/Bogota');


// const job = new CronJob(
//     '* 49 16 * * *',
//     async () => {
        
//         //var sistemas = await cds.run(SELECT.from('APP_CAP_GTA_SISTEMAS').columns('ID', 'sistype'));*antes
//         var sistemas = await cds.run(SELECT.from('APP_CAP_GTA_SISTEMAS').columns('ID', 'sitema'));
//         setTimeout( async () => { //esta
//         console.log('hola '+sistemas)
//         let gtaca = new GtaConService()
//         let body = await gtaca.ApiFallas();
//         var i = 10000;
//         for (let bodywork of body.value) {
//             var y = null;
//             for (const sistema of sistemas) {
//                //console.log('sys '+sistema.sistype);*antes
//                 console.log('sys '+sistema.sitema);
//                 if(bodywork.MaintNotifOvwDamageCodeGroup.slice(-2) == sistema.sitema){
//                 //if(bodywork.MaintNotifOvwDamageCodeGroup.slice(-2) == sistema.sistype){ *antes
//                     y = sistema.ID
//                 }
//             }

            
             
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  i+'ce5-004b-40ef-a66e-562a85dde69d', //esta tambien            
//                 maintNotifOvwDamageCode: bodywork.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGro: bodywork.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: bodywork.MaintNotifOvwDamageCtlgCodeTxt,
//                 maintNotifOvwDamageCodeGroup_ID: y //esta 

//                 // ID:  i+'ce5-004b-40ef-a66e-562a85dde69d', //esta tambien            
//                 // damageID: bodywork.MaintNotifOvwDamageCode,
//                 // equipment_type: bodywork.MaintNotifOvwDamageCodeGroup,
//                 // descripcion: bodywork.MaintNotifOvwDamageCtlgCodeTxt,
//                 // sistemas_ID: y //esta 
//             }));
//             i++;

//         }
//         console.log('terminado');
//         }, 2000);//esta
//     },    
//     null,
//     true,
//     'America/Bogota'
// );

// const job = new CronJob(
//     '* 24 15 * * *',
//     async () => {

//         console.log('hola')
//         let gtafa = new GtaConService()
//         let falla = await gtafa.ApiFallasRetroFR();
//         var i = 1000;
//         for (let fallas of falla.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '9'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallas.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallas.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallas.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }
//     },
//     null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;