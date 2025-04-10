const jobTest = require('./job-Api_Equipos');
const jobemple = require('./job_Api_Empleados');
const jobfaHilux = require('./job_Api_FallasHilux.js');
const jobfaRetro = require('./job_Api_FallasRetro.js');
const jobsiste = require('./job_Api_Sistemas.js');
const jobHilux = require('./job-Api_PartesHilux.js');
const jobRetro = require('./job_Api_PartesRetro.js');
const jobOrdenesProyectoServicios = require('./job_Api_OrdenProyectos.js');
const jobgrafos = require('./job_Api_Grafos.js');
const jobordenMTTO = require('./job_Api_OrdenMTTO.js')
const jobProyects = require('./job_Api_Proyectos.js')
const jobGrafosactivities = require('./job_Api_GrafosProyects.js')
const jobproyectsactivities = require ('./job_Api_proyectsActivities.js')




module.exports = {
    initialize: async function () {
        try {
            console.log('Job inicializado');
        } catch (error) {
            console.error('Error al ejecutar el job', error);
        }
    },
};