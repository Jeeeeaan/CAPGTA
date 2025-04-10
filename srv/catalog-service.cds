using app.CAP_GTA as Service from '../db/Cap';



service CatalogService {  

 

    entity equipment as projection on Service.equipment;
    entity sistemas  as projection on Service.sistemas;
    entity partes    as projection on Service.partes;
    entity fallas    as projection on Service.fallas;
    entity failure   as projection on Service.failure;  
    entity files     as projection on Service.files;
    entity items     as projection on Service.items;
    entity report    as projection on Service.report;
    entity employee  as projection on Service.employee;
    entity proyOrder as projection on Service.proyOrder;
    entity grafOrder as projection on Service.grafOrder;
    entity operMaint  as projection on Service.operMaint;
    entity timeReportProy as projection on Service.timeReportProy;
    entity NotificacionesEnviadas as projection on Service.NotificacionesEnviadas;
    entity NotificacionesEnviadasTiempos as projection on Service.NotificacionesEnviadasTiempos;
    entity Proyects as projection on Service.Proyects;
    entity grafProyects as projection on Service.grafProyects;
    entity ProyectsActivities as projection on Service.ProyectsActivities;
    // entity timeReportMainProyects as projection on Service.timeReportMainProyects;










}
