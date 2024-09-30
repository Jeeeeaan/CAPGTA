const httpClient = require('@sap-cloud-sdk/http-client');
//const { subscriberFirst } = require('@sap-cloud-sdk/connectivity');
const https = require('https');

class GtaConService {
 #destinationName = 'apiGta';

 async infoGta(url) {

  const httpsAgent = new https.Agent({
   rejectUnauthorized: false,
  });

  try {
   let headers = {
    'Content-Type': 'application/json',
   };
   let response = await httpClient.executeHttpRequest(
    { 
     destinationName: this.#destinationName,
     //selectionStrategy: subscriberFirst,
    // jwt
    },
    {
     method: 'GET',
     httpsAgent: httpsAgent,
     url: '/http/get_EamConsultarEquipo/Equipment?$expand=to_Partner&$format=json&sap-client=110',
     headers: headers,
    }
   );
   return response.data;
  } catch (err) {
   console.error(`Error obtaining supplier information`, err);
   throw err;
  }
 }
}

module.exports = { GtaConService };

