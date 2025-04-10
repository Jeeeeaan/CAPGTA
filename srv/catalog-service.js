const cds = require('@sap/cds');
const { GtaConService } = require('./conexionApi');                          //JOB
const jobIndex = require('./job/index');
const { mkdir } = require('fs');
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const { Notifications, NotificacionesEnviadas, timeReportProy, NotificacionesEnviadasTiempos  } = cds.entities; 
const https = require('https');
const { Console } = require('console');

class CatalogService extends cds.Service {
    async init() {
        const { failure } = this.entities;

        this.before("CREATE", failure, async (req) => {
            // Obtener registros de la tabla FAILURE
            const result = await cds.run(
                SELECT.from(failure).columns(fai => {
                    fai.ID;
                    fai.comentarios;
                    fai.equipo_inventorynumber;
                    fai.partes(partes => {
                        partes.maintNotifObjPartCode;
                        partes.MAINTNOTIFOBJPARTCODEGROUP_ID;
                    })
                    fai.fallas(fallas => {
                        fallas.maintNotifOvwDamageCode;
                        fallas.MAINTNOTIFOVWDAMAGECODEGROUP_ID;
                    })
                })
            );

            console.log('Datos obtenidos de la BBDD:', result);

            // Recorrer registros con record
            for (const record of result) {
                const transformedData = {
                    "NotificationText": record.comentarios,
                    "NotificationType": "M2",
                    "TechnicalObject": record.equipo_inventorynumber,
                    "TechObjIsEquipOrFuncnlLoc": "EAMS_EQUI",
                    "to_Item": {
                        "results": [
                            {
                                "MaintenanceNotificationItem": "0007",
                                "MaintNotifDamageCodeGroup": record.fallas.MAINTNOTIFOVWDAMAGECODEGROUP_ID,
                                "MaintNotificationDamageCode": record.fallas.maintNotifOvwDamageCode,
                                "MaintNotifObjPrtCodeGroup": record.partes.MAINTNOTIFOBJPARTCODEGROUP_ID,
                                "MaintNotifObjPrtCode": record.partes.maintNotifObjPartCode,
                            }
                        ]
                    }
                };

                
                try {
                    // Verificar si ya fue enviada
                    const notificationId = record.ID;  
                    const alreadySent = await this.checkIfNotificationSent(notificationId);

                    if (alreadySent) {
                        console.log(`La notificación con ID ${notificationId} ya fue enviada.`);
                    } else {
                        // Si no se envio, se envia al ERP
                        console.log(`Enviando la notificación con ID ${notificationId} al ERP...`);

                        const credentials = 'sb-f74b04bd-415e-4ce4-8763-b2ba6c8e632d!b322598|it-rt-cpi-t72tpkjc!b56186:d395fa13-195a-42b3-a3b2-228902168ff0$gBR_eWxwlrpFEIjyZai6jrTeDXTyy9iOxvbi8TVsUWw=';
                        const encodedCredentials = Buffer.from(credentials).toString('base64');
                        
                        const myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("Authorization", `Basic ${encodedCredentials}`);
                        myHeaders.append("Cookie", "SAP_SESSIONID_GGD_110=XelzHA7aesY3WGqMUtj03XbXmWWw7hHvp2ixP1Lq_qU%3d; SAP_SESSIONID_GGD_120=r0mg-B_P8Dg3JuBXQuelndyXUSO2YRHvp2qxP1Lq_qU%3d; sap-usercontext=sap-client=120");

                        const raw = JSON.stringify(transformedData);
                        const requestOptions = {
                            method: "POST",
                            headers: myHeaders,
                            body: raw,
                            redirect: "follow"
                        };

                        // Enviar datos al ERP
                        await fetch("https://cpi-t72tpkjc.it-cpi019-rt.cfapps.us10-002.hana.ondemand.com/http/get_EamCrearNotificacionMantenimiento/MaintenanceNotification?sap-client=120", requestOptions)
                            .then((response) => response.text())
                            .then((result) => console.log(result))
                            .catch((error) => console.error(error));

                        // Registrar la notificación como enviada en la tabla NotificacionesEnviadas
                        await this.logNotificationSent(notificationId);
                        console.log(`Notificación con ID ${notificationId} enviada y registrada.`);
                    }
                } catch (error) {
                    console.error('Error al procesar la notificación:', error);
                }
            }
        });
    }

    // Verificación  de info enviada
    async checkIfNotificationSent(notificationId) {
        const result = await cds.run(
            SELECT.from(NotificacionesEnviadas).where({ NotificationId: notificationId })
        );
        return result.length > 0; // Si hay resultados, significa que ya fue enviada
    }

    // Registrar la notificación como enviada en la tabla NotificacionesEnviadas
    async logNotificationSent(notificationId) {
        try {
            await cds.run(
                INSERT.into(NotificacionesEnviadas).entries({
                    NotificationId: notificationId,
                    Timestamp: new Date()
                })
            );
            console.log(`Notificación ${notificationId} registrada como enviada.`);
        } catch (error) {
            console.error(`Error al registrar la notificación ${notificationId} como enviada:`, error);
        }
   }


    
//     --------------------------------------------POST TIEMPOS ORD SRV---------------------------------------------- //
    
    
//    async init() {
//         const { timeReportProy } = this.entities;

//         this.before("CREATE", timeReportProy, async (req) => {
           
//            console.log("INICIO");

            
//             // const result = await cds.run(
//             //     SELECT.from(timeReportProy).columns(rep => {
//             //         rep.ID;
//             //         rep.ISFINALCONFIRMATION;
//             //         rep.COMMENTS;
//             //         rep.TIEMPO;                    
//             //         rep.report.MAINTENANCEORDEROPERATION; 
//             //         rep.report.MAINTENANCEORDER_AUFNR;                    
//             //         rep.employee.PERNR; 
//             //     })
//             // );
            
            

//             // console.log('Datos obtenidos de la BBDD:', result);

//             // Recorrer registros con record
//             // for (const record of result) {
//                 const transformedData = {
//                         "MaintenanceOrder": "4000193",//record.MAINTENANCEORDER_AUFNR, // MAINTENANCEORDER_AUFNR
//                         "MaintenanceOrderOperation": "0010",//record.MAINTENANCEORDEROPERATION, // MAINTENANCEORDE2ROPERATION
//                         "PersonnelNumber": "00000007", //record.PERNR, // PERNR
//                         "ActualWorkQuantity": "1", // TIEMPO
//                         "ActualWorkQuantityUnit": "H", // quemado
//                         "IsFinalConfirmation": false, // ISFINALCONFIRMATION
//                         "ConfirmationText": "Prueba datos quemados",//record.COMMENTS // COMMENTS
//                 };

//                 console.log(transformedData);

//                 try {
//                     // Verificar si ya fue enviada
//                     // const notificationId = record.ID;  
//                     // const alreadySent = await this.checkIfNotificationSent(notificationId);

//                     // if (alreadySent) {
//                     //     console.log(`La notificación con ID ${notificationId} ya fue enviada.`);
//                     // } else {
//                     //     // Si no se envio, se envia al ERP
//                     //     console.log(`Enviando la notificación con ID ${notificationId} al ERP...`);

//                         const credentials = 'sb-f74b04bd-415e-4ce4-8763-b2ba6c8e632d!b322598|it-rt-cpi-t72tpkjc!b56186:d395fa13-195a-42b3-a3b2-228902168ff0$gBR_eWxwlrpFEIjyZai6jrTeDXTyy9iOxvbi8TVsUWw=';
//                         const encodedCredentials = Buffer.from(credentials).toString('base64');
                        
//                         const myHeaders = new Headers();
//                         myHeaders.append("Content-Type", "application/json");
//                         myHeaders.append("Authorization", `Basic ${encodedCredentials}`);
//                         myHeaders.append("Cookie", "SAP_SESSIONID_GGD_110=XelzHA7aesY3WGqMUtj03XbXmWWw7hHvp2ixP1Lq_qU%3d; SAP_SESSIONID_GGD_120=r0mg-B_P8Dg3JuBXQuelndyXUSO2YRHvp2qxP1Lq_qU%3d; sap-usercontext=sap-client=120");

//                         const raw = JSON.stringify(transformedData);
//                         const requestOptions = {
//                             method: "POST",
//                             headers: myHeaders,
//                             body: raw,
//                             redirect: "follow"
//                         };


//                         await fetch("https://cpi-t72tpkjc.it-cpi019-rt.cfapps.us10-002.hana.ondemand.com/http/get_EamConfirmarOrdenMantenimiento/MaintOrderConfirmation?sap-client=110", requestOptions)
//                             .then((response) => response.text())
//                             .then((result) => console.log(result))
//                             .catch((error) => console.error(error));

//                         // Registrar la notificación como enviada en la tabla NotificacionesEnviadasTiempos
//                         // await this.logNotificationSent(notificationId);
//                         // console.log(`Notificación con ID ${notificationId} enviada y registrada.`);
//                     // }
//                 } catch (error) {
//                     console.error('Error al procesar la notificación:', error);
//                 }
//             // }
//         });
//     }

//     // Verificación de info enviada
//     async checkIfNotificationSent(notificationId) {
//         const result = await cds.run(
//             SELECT.from(NotificacionesEnviadasTiempos).where({ NotificationTiemposId: notificationId })
//         );
//         return result.length > 0; 
//     }

//     // Registrar la notificación como enviada en la tabla NotificacionesEnviadasTiempos
//     async logNotificationSent(notificationId) {
//         try {
//             await cds.run(
//                 INSERT.into(NotificacionesEnviadasTiempos).entries({
//                     NotificationTiemposId: notificationId,
//                     Timestamp: new Date()
//                 })
//             );
//             console.log(`Notificación ${notificationId} registrada como enviada.`);
//         } catch (error) {
//             console.error(`Error al registrar la notificación ${notificationId} como enviada:`, error);
//         }
//     }

// //     // --------------------------------------------POST TIEMPOS PROYECTOS---------------------------------------------- //


}
module.exports = CatalogService;



