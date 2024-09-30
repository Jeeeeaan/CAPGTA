const cds = require('@sap/cds');


module.exports = srv => {
   srv.after('GET','Equipment', xs => {
    console.log ('hola')
   })
}