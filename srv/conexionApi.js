const httpClient = require('@sap-cloud-sdk/http-client');
const https = require('https');

class GtaConService {
    #destinationName = 'apiGta';


    // función para llamar Api de equipos
    async ApiEquipos(url) {


        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    url: '/http/get_EamConsultarEquipo/Equipment?$expand=to_Partner&$filter=(EquipmentCategory eq%20%27M%27and ControllingArea eq%20%27COGT%27)&$format=json&sap-client=120',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }



    //Función para llamar Api de  empleado responsable 
    async ApiEmpleado(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    url: '/http/get_EamConsultarPersona/PersonalSet?sap-client=110&$format=json',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //*******PARTES*******/
    //Función para llamar Api partes de objeto HILUX-MO
    async ApiPartesHiluxMO(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27HILUX-MO%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }


    //Función para llamar Api partes de objeto HILUX-CA
    async ApiPartesHiluxCA(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27HILUX-CA%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api partes de objeto HILUX-EL
    async ApiPartesHiluxEL(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27HILUX-EL%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api partes de objeto HILUX-FR
    async ApiPartesHiluxFR(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27HILUX-FR%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api partes de objeto HILUX-LL
    async ApiPartesHiluxLL(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27HILUX-LL%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api partes de objeto HILUX-DI
    async ApiPartesHiluxDI(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27HILUX-DI%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api partes de objeto HILUX-SU
    async ApiPartesHiluxSU(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27HILUX-SU%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api partes de objeto HILUX-TR
    async ApiPartesHiluxTR(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27HILUX-TR%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //////RETRO////*********************************** */
    //Función para llamar Api partes de objeto RETRO-MO
    async ApiPartesRetroMO(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27RETRO-MO%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }


    //Función para llamar Api partes de objeto RETRO-CA
    async ApiPartesRetroCA(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27RETRO-CA%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api partes de objeto RETRO-EL
    async ApiPartesRetroEL(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27RETRO-EL%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }



    //Función para llamar Api partes de objeto RETRO-FR
    async ApiPartesRetroFR(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27RETRO-FR%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api partes de objeto RETRO-LL
    async ApiPartesRetroLL(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27RETRO-LL%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }


    //Función para llamar Api partes de objeto RETRO-DI
    async ApiPartesRetroDI(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27RETRO-DI%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api partes de objeto RETRO-SU
    async ApiPartesRetroSU(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27RETRO-SU%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api partes de objeto RETRO-TR
    async ApiPartesRetroTR(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    //url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoParteObjeto/MaintNotifObjPrtCode?$filter=(MaintNotifObjPartCodeGroup eq%20%27RETRO-TR%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }


    //******SISTEMAS******/
    //Función para llamar Api de  sistemas HILUX
    async ApiSistemasHilux(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    url: '/http/get_EamConversionClave/SistemasSet?$filter=(%20Perfil%20eq%20%27HILUX%27)&sap-client=120&$format=json',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de  sistemas RETRO
    async ApiSistemasRetro(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    url: '/http/get_EamConversionClave/SistemasSet?$filter=(%20Perfil%20eq%20%27RETRO%27)&sap-client=120&$format=json',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //*********FALLAS**************/

    //Función para llamar Api de  fallas HILUX-MO
    async ApiFallasHiluxMO(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27HILUX-MO%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de  fallas HILUX-CA
    async ApiFallasHiluxCA(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27HILUX-CA%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de  fallas HILUX-EL
    async ApiFallasHiluxEL(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27HILUX-EL%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api de  fallas HILUX-FR
    async ApiFallasHiluxFR(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27HILUX-FR%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }  //Función para llamar Api de  fallas HILUX-LL
    async ApiFallasHiluxLL(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27HILUX-LL%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api de  fallas HILUX-DI
    async ApiFallasHiluxDI(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27HILUX-DI%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api de  fallas HILUX-SU
    async ApiFallasHiluxSU(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27HILUX-SU%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api de  fallas HILUX-TR
    async ApiFallasHiluxTR(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27HILUX-TR%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    ////RETRO////******************************************** */
    //Función para llamar Api de  fallas RETRO-MO
    async ApiFallasRetroMO(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27RETRO-MO%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de  fallas RETRO-CA
    async ApiFallasRetroCA(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27RETRO-CA%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de  fallas RETRO-EL
    async ApiFallasRetroEL(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27RETRO-EL%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api de  fallas RETRO-FR
    async ApiFallasRetroFR(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27RETRO-FR%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de  fallas RETRO-LL
    async ApiFallasRetroLL(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27RETRO-LL%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de  fallas RETRO-DI
    async ApiFallasRetroDI(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27RETRO-DI%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }
    //Función para llamar Api de  fallas RETRO-SU
    async ApiFallasRetroSU(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27RETRO-SU%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }


    //Función para llamar Api de  fallas RETRO-TR
    async ApiFallasRetroTR(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?$filter=(MaintNotifOvwDamageCodeGroup eq %27RETRO-TR%27)&sap-client=120&sap-language=ES',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de ordenes de servicios (Proyectos de SRV)
    async ApiOrderServicios(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    //url: '/http/get_EamLeerServicoOrden/A_ServiceOrder?$expand=to_Item,to_ReferenceObject&$filter=( ServiceOrderIsReleased eq %27X%27 )&sap-client=110&$format=json',
                    url: '/http/get_EamLeerServicoOrden/A_ServiceOrder?$expand=to_Item,to_ReferenceObject&$filter=( ServiceOrderIsReleased eq %27X%27 )&sap-client=110&$format=json',
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de grafos (actividades)

    async ApiGrafos(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest(
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamServCorrectivo/CORRECTIVESRVSet?sap-client=110&$format=json',

                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de operación de MTTO (actividades)

    async ApiOperacionMTTO(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest( 
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamLeerOrdenMantenimiento/MaintenanceOrder?$expand=to_MaintenanceOrderOperation&sap-client=110&$filter=( ControllingArea eq %27COGT%27 )&$format=json',
                    
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    //Función para llamar Api de puestos de trabajo.

    async ApiPuestoTrabajo(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest( 
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamConsultarPersona/workcenterTypeSet(Arbpl=%27TESTING%27,Werks=%271710%27)?sap-client=110&$format=json',
                    
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }


    //Función para llamar api proyectos

    async ApiProyectos(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest( 
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    // url: '/http/get_EamCatalogoFallas/MaintNotifOvwDamageCode?sap-client=120&sap-language=ES',
                    url: '/http/get_EamConversionClave/projDescSet?$format=json&sap-client=110',
                    
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    async ApiPGrafosProyectos(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest( 
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    url: '/http/get_EamProyectos/ProjectNetwork?sap-client=110&$format=json',
                    
                    headers: headers,
                }
            );
            return response.data;
        } catch (err) {
            console.error(`Error obtaining supplier information`, err);
            throw err;
        }
    }

    // Api para actividades de proyectos

    async ActividadesProyectos(url) {

        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            let response = await httpClient.executeHttpRequest( 
                {
                    destinationName: this.#destinationName,
                },
                {
                    method: 'GET',
                    url: url,
                    
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
