using app.CAP_GTA as Service from '../db/Cap';


service CatalogService {  
 
entity vehiculos as projection on Service.vehiculos;  
entity conductor as  projection on Service.conductor;
entity personal as projection on Service.personal;  
entity proyectos as  projection on Service.proyectos;
entity incidentes as projection on Service.incidentes;  
entity responsables as  projection on Service.responsables;
entity reporte as projection on Service.reporte;
entity combustible as projection on Service.combustible;  
entity fallas_maquinaria as  projection on Service.fallas_maquinaria;
entity actividades as projection on Service.actividades;  
entity equipos as  projection on Service.equipos;
entity maquinaria as projection on Service.maquinaria;  
entity servicios as  projection on Service.servicios;
entity repuestos as projection on Service.repuestos;  
entity registro_tiempo as projection on Service.registro_tiempo;
entity reporte_maquinaria as projection on Service.reporte_maquinaria;
entity motor as projection on Service.motor;
entity electrico as projection on Service.electrico;
entity suspension as projection on Service.suspension;
entity transmision as projection on Service.transmision;
entity usuarios as projection on Service.usuarios;
entity asignaciones as projection on Service.asignaciones;
}
