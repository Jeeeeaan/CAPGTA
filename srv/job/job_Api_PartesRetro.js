// const { CronJob } = require('cron');
// const moment = require('moment-timezone');
// const { GtaConService } = require('../conexionApi');
// const cds = require('@sap/cds');
// const { getAxiosConfigWithDefaultsWithoutMethod } = require('@sap-cloud-sdk/http-client/dist/http-client');


// moment.tz.setDefault('America/Bogota');


// // const job = new CronJob(
// //     '* 09 21 * * *',
// //     async () => {
// //         console.log('hola')
// //         let gtaRetro = new GtaConService()
// //         let parReMO = await gtaRetro.ApiPartesRetroMO()
// //         var i = 1000;
// //         for (let RMO of parReMO.value) {
// //             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

// //                 ID:  '8'+ i+'ce5',
// //                 maintNotifObjPartCode: RMO.MaintNotifObjPartCode,
// //                 maintNotifObjPartCodeGroup_ID: RMO.MaintNotifObjPartCodeGroup,
// //                 maintNotifObjPartCtlgCodeText: RMO.MaintNotifObjPartCtlgCodeText

// //             }))          
// //         i++;
// //         }

// //         let parReCA = await gtaRetro.ApiPartesRetroCA()
// //         var i = 1000;
// //         for (let RCA of parReCA.value) {
// //             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

// //                 ID:  '9'+ i+'ce5',
// //                 maintNotifObjPartCode: RCA.MaintNotifObjPartCode,
// //                 maintNotifObjPartCodeGroup_ID: RCA.MaintNotifObjPartCodeGroup,
// //                 maintNotifObjPartCtlgCodeText: RCA.MaintNotifObjPartCtlgCodeText

// //             }))          
// //         i++;
// //         }

// //         let parReEL = await gtaRetro.ApiPartesRetroEL()
// //         var i = 100;
// //         for (let REL of parReEL.value) {
// //             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

// //                 ID:  '10'+ i+'ce5',
// //                 maintNotifObjPartCode: REL.MaintNotifObjPartCode,
// //                 maintNotifObjPartCodeGroup_ID: REL.MaintNotifObjPartCodeGroup,
// //                 maintNotifObjPartCtlgCodeText: REL.MaintNotifObjPartCtlgCodeText

// //             }))          
// //         i++;
// //         }

// //         let parReFR = await gtaRetro.ApiPartesRetroFR()
// //         var i = 100;
// //         for (let RFR of parReFR.value) {
// //             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

// //                 ID:  '11'+ i+'ce5',
// //                 maintNotifObjPartCode: RFR.MaintNotifObjPartCode,
// //                 maintNotifObjPartCodeGroup_ID: RFR.MaintNotifObjPartCodeGroup,
// //                 maintNotifObjPartCtlgCodeText: RFR.MaintNotifObjPartCtlgCodeText

// //             }))          
// //         i++;
// //         }

// //         let parReLL = await gtaRetro.ApiPartesRetroLL()
// //         var i = 100;
// //         for (let RLL of parReLL.value) {
// //             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

// //                 ID:  '12'+ i+'ce5',
// //                 maintNotifObjPartCode: RLL.MaintNotifObjPartCode,
// //                 maintNotifObjPartCodeGroup_ID:RLL.MaintNotifObjPartCodeGroup,
// //                 maintNotifObjPartCtlgCodeText: RLL.MaintNotifObjPartCtlgCodeText

// //             }))          
// //         i++;
// //         }

// //         let parReDI = await gtaRetro.ApiPartesRetroDI()
// //         var i = 100;
// //         for (let RDI of parReDI.value) {
// //             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

// //                 ID:  '13'+ i+'ce5',
// //                 maintNotifObjPartCode: RDI.MaintNotifObjPartCode,
// //                 maintNotifObjPartCodeGroup_ID: RDI.MaintNotifObjPartCodeGroup,
// //                 maintNotifObjPartCtlgCodeText: RDI.MaintNotifObjPartCtlgCodeText

// //             }))          
// //         i++;
// //         }

// //         let parReSU = await gtaRetro.ApiPartesRetroSU()
// //         var i = 100;
// //         for (let RSU of parReSU.value) {
// //             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

// //                 ID:  '14'+ i+'ce5',
// //                 maintNotifObjPartCode:RSU.MaintNotifObjPartCode,
// //                 maintNotifObjPartCodeGroup_ID: RSU.MaintNotifObjPartCodeGroup,
// //                 maintNotifObjPartCtlgCodeText: RSU.MaintNotifObjPartCtlgCodeText

// //             }))          
// //         i++;
// //         }

// //         let parReTR = await gtaRetro.ApiPartesRetroTR()
// //         var i = 100;
// //         for (let RTR of parReTR.value) {
// //             cds.run(INSERT.into('APP_CAP_GTA_PARTES').entries({

// //                 ID:  '15'+ i+'ce5',
// //                 maintNotifObjPartCode: RTR.MaintNotifObjPartCode,
// //                 maintNotifObjPartCodeGroup_ID: RTR.MaintNotifObjPartCodeGroup,
// //                 maintNotifObjPartCtlgCodeText: RTR.MaintNotifObjPartCtlgCodeText

// //             }))          
// //         i++;
// //         }

        

// //     },
// //     null,
// //     true,
// //     'America/Bogota'
// // );

// // module.exports = job;