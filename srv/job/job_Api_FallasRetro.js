// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { FORMERR } = require('dns');


// moment.tz.setDefault('America/Bogota');



// const job = new CronJob(
//     '* 07 21 * * *',
//     async () => {

//         console.log('hola')
//         let gtaHilux = new GtaConService()
//         let fallasHMO = await gtaHilux.ApiFallasRetroMO();
//         var i = 1000;
//         for (let fallaMO of fallasHMO.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '8'+ i + 'ce5',            
//                 maintNotifOvwDamageCode: fallaMO.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaMO.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaMO.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }


//         let fallasHCA = await gtaHilux.ApiFallasRetroCA();
//         var i = 1000;
//         for (let fallaCA of fallasHCA.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '9'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaCA.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaCA.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaCA.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }

//         let fallasHEL = await gtaHilux.ApiFallasRetroEL();
//         var i = 100;
//         for (let fallaEL of fallasHEL.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '10'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaEL.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaEL.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaEL.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }

//         let fallasHFR = await gtaHilux.ApiFallasRetroFR();
//         var i = 100;
//         for (let fallaFR of fallasHFR.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '11'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaFR.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaFR.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaFR.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }

//         let fallasHLL = await gtaHilux.ApiFallasRetroLL();
//         var i = 100;
//         for (let fallaLL of fallasHLL.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '12'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaLL.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaLL.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaLL.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }


//         let fallasHDI = await gtaHilux.ApiFallasRetroDI();
//         var i = 100;
//         for (let fallaDI of fallasHDI.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '13'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaDI.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaDI.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaDI.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }

//         let fallasHSU = await gtaHilux.ApiFallasRetroSU();
//         var i = 100;
//         for (let fallaSU of fallasHSU.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '14'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaSU.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaSU.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaSU.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }

//         let fallasHTR = await gtaHilux.ApiFallasRetroTR();
//         var i = 100;
//         for (let fallaTR of fallasHTR.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '15'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaTR.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaTR.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaTR.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//         }


       
//     },
//     null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;