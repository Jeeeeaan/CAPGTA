// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { getAxiosConfigWithDefaultsWithoutMethod } = require('@sap-cloud-sdk/http-client/dist/http-client');


// moment.tz.setDefault('America/Bogota');


// const job = new CronJob(
//     '* 09 21 * * *',
//     async () => {
//         console.log('hola')
//         let gtaHilux = new GtaConService()
//         let parHiMO = await gtaHilux.ApiPartesHiluxMO()
//         var i = 10000;
//         for (let HMO of parHiMO.value) {
//             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

//                 ID:   i+'ce5',
//                 maintNotifObjPartCode: HMO.MaintNotifObjPartCode,
//                 maintNotifObjPartCodeGroup_ID: HMO.MaintNotifObjPartCodeGroup,
//                 maintNotifObjPartCtlgCodeText: HMO.MaintNotifObjPartCtlgCodeText

//             }))          
//         i++;
//         }

//         let parHiCA = await gtaHilux.ApiPartesHiluxCA()
//         var i = 1000;
//         for (let HCA of parHiCA.value) {
//             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

//                 ID:  '1'+ i+'ce5',
//                 maintNotifObjPartCode: HCA.MaintNotifObjPartCode,
//                 maintNotifObjPartCodeGroup_ID: HCA.MaintNotifObjPartCodeGroup,
//                 maintNotifObjPartCtlgCodeText: HCA.MaintNotifObjPartCtlgCodeText

//             }))          
//         i++;
//         }

//         let parHiEL = await gtaHilux.ApiPartesHiluxEL()
//         var i = 1000;
//         for (let HEL of parHiEL.value) {
//             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

//                 ID:  '2'+ i+'ce5',
//                 maintNotifObjPartCode: HEL.MaintNotifObjPartCode,
//                 maintNotifObjPartCodeGroup_ID: HEL.MaintNotifObjPartCodeGroup,
//                 maintNotifObjPartCtlgCodeText: HEL.MaintNotifObjPartCtlgCodeText

//             }))          
//         i++;
//         }

//         let parHiFR = await gtaHilux.ApiPartesHiluxFR()
//         var i = 1000;
//         for (let HFR of parHiFR.value) {
//             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

//                 ID:  '3'+ i+'ce5',
//                 maintNotifObjPartCode: HFR.MaintNotifObjPartCode,
//                 maintNotifObjPartCodeGroup_ID: HFR.MaintNotifObjPartCodeGroup,
//                 maintNotifObjPartCtlgCodeText: HFR.MaintNotifObjPartCtlgCodeText

//             }))          
//         i++;
//         }

//         let parHiLL = await gtaHilux.ApiPartesHiluxLL()
//         var i = 1000;
//         for (let HLL of parHiLL.value) {
//             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

//                 ID:  '4'+ i+'ce5',
//                 maintNotifObjPartCode: HLL.MaintNotifObjPartCode,
//                 maintNotifObjPartCodeGroup_ID: HLL.MaintNotifObjPartCodeGroup,
//                 maintNotifObjPartCtlgCodeText: HLL.MaintNotifObjPartCtlgCodeText

//             }))          
//         i++;
//         }

//         let parHiDI = await gtaHilux.ApiPartesHiluxDI()
//         var i = 1000;
//         for (let HDI of parHiDI.value) {
//             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

//                 ID:  '5'+ i+'ce5',
//                 maintNotifObjPartCode: HDI.MaintNotifObjPartCode,
//                 maintNotifObjPartCodeGroup_ID: HDI.MaintNotifObjPartCodeGroup,
//                 maintNotifObjPartCtlgCodeText: HDI.MaintNotifObjPartCtlgCodeText

//             }))          
//         i++;
//         }

//         let parHiSU = await gtaHilux.ApiPartesHiluxSU()
//         var i = 1000;
//         for (let HSU of parHiSU.value) {
//             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

//                 ID:  '6'+ i+'ce5',
//                 maintNotifObjPartCode: HSU.MaintNotifObjPartCode,
//                 maintNotifObjPartCodeGroup_ID: HSU.MaintNotifObjPartCodeGroup,
//                 maintNotifObjPartCtlgCodeText: HSU.MaintNotifObjPartCtlgCodeText

//             }))          
//         i++;
//         }

//         let parHiTR = await gtaHilux.ApiPartesHiluxTR()
//         var i = 1000;
//         for (let HTR of parHiTR.value) {
//             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

//                 ID:  '7'+ i+'ce5',
//                 maintNotifObjPartCode: HTR.MaintNotifObjPartCode,
//                 maintNotifObjPartCodeGroup_ID: HTR.MaintNotifObjPartCodeGroup,
//                 maintNotifObjPartCtlgCodeText: HTR.MaintNotifObjPartCtlgCodeText

//             }))          
//         i++;
//         }

        

//     },
//     null,
//     true,
//     'America/Bogota'
// );

// module.exports = job;