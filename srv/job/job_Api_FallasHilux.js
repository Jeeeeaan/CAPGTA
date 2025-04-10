// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { FORMERR } = require('dns');


// moment.tz.setDefault('America/Bogota');



// const job = new CronJob(
//     '* 05 21 * * *',
//     async () => {

//         console.log('hola')
//         let gtaHilux = new GtaConService()
//         let fallasHMO = await gtaHilux.ApiFallasHiluxMO();
//         var i = 10000;
//         for (let fallaMO of fallasHMO.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:   i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaMO.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaMO.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaMO.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//             console.log('mo')
//         }

       
//         let fallasHCA = await gtaHilux.ApiFallasHiluxCA();
//         var i = 1000;
//         for (let fallaCA of fallasHCA.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '1'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaCA.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaCA.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaCA.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//             console.log('ca')
//         }
       
//         let fallasHEL = await gtaHilux.ApiFallasHiluxEL();
//         var i = 1000;
//         for (let fallaEL of fallasHEL.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '2'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaEL.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaEL.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaEL.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//             console.log('el')
//         }
        
//         let fallasHFR = await gtaHilux.ApiFallasHiluxFR();
//         var i = 1000;
//         for (let fallaFR of fallasHFR.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '3'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaFR.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaFR.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaFR.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//             console.log('fr')
//         }
        
//         let fallasHLL = await gtaHilux.ApiFallasHiluxLL();
//         var i = 1000;
//         for (let fallaLL of fallasHLL.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '4'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaLL.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaLL.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaLL.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//             console.log('ll')
//         }

        
//         let fallasHDI = await gtaHilux.ApiFallasHiluxDI();
//         var i = 1000;
//         for (let fallaDI of fallasHDI.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '5'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaDI.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaDI.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaDI.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//             console.log('di')
//         }
       
//         let fallasHSU = await gtaHilux.ApiFallasHiluxSU();
//         var i = 1000;
//         for (let fallaSU of fallasHSU.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '6'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaSU.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaSU.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaSU.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//             console.log('su')
//         }
       
//         let fallasHTR = await gtaHilux.ApiFallasHiluxTR();
//         var i = 1000;
//         for (let fallaTR of fallasHTR.value) {            
//             cds.run(INSERT.into('APP_CAP_GTA_FALLAS').entries({

//                 ID:  '7'+ i + 'ce5',             
//                 maintNotifOvwDamageCode: fallaTR.MaintNotifOvwDamageCode,
//                 maintNotifOvwDamageCodeGroup_ID: fallaTR.MaintNotifOvwDamageCodeGroup,
//                 maintNotifOvwDamageCtlgCodeTxt: fallaTR.MaintNotifOvwDamageCtlgCodeTxt


//             }));
//             i++;
//             console.log('tr')
//         }


       
//     },
//     null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;