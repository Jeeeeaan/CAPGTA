namespace app.CAP_GTA;


entity vehiculos {
    key placa                        : String(10) not null;
        numero_interno               : Integer;
        fecha                        : Date;        
        kilometraje_inicial          : Integer;
        kilometraje_final            : Integer;  
        tipo_motor                   : String(50);
        tipo_servicio                : String(50);
        marca                        : String(50);                   
        observaciones                : String(50);
        status                       : Boolean;                   
        conductor                    : Association to conductor
                                          on conductor.vehiculos = $self; 
        reporte                      : Association to many reporte
                                          on reporte.vehiculos = $self;
        motor                        : Association to many motor
                                          on motor.vehiculos = $self;
        electrico                    : Association to many electrico
                                          on electrico.vehiculos = $self;                                        
        suspension                   : Association to many suspension
                                          on suspension.vehiculos = $self;
        transmision                  : Association to many transmision
                                          on transmision.vehiculos = $self;
        registro_tiempo              : Association to registro_tiempo;
                                                                          
                                          

}

  @assert.unique : {
   unique_vehiculos: [ vehiculos ]
}


entity conductor {
    key documento                : Integer not null;        
        nombre                   : String(50);
        apellido                 : String(50);
        telefono                 : Integer;
        email                    : String(45);
        direccion                : String(45);
        observacion              : String(45);
        ciudad                   : String(50);
        status                   : Boolean;
        vehiculos                : Association to vehiculos;        
        reporte_maquinaria       : Association to many reporte_maquinaria
                                     on reporte_maquinaria.conductor = $self;                                                                                                  
        maquinaria               : Association to many maquinaria
                                     on maquinaria.conductor = $self;
}

entity reporte {
    key ID                    : UUID;              
        fecha_inicio          : Date;        
        kilometraje_actual    : Integer;
        nombre_funcionario    : String(50);    
        ubicacion             : String(50);
        ciudad                : String(50);
        aceite                : String(50);
        refrigerante          : String(50);
        combustible           : String(50);
        luz_delantera         : String(50);
        luz_trasera           : String(50);      
        llantas               : String(50);
        cinturon_seguridad    : String(50);
        equipo_carretera      : String(50);
        freno_parqueo         : String(50);
        frenos                : String(50);
        vidrios               : String(50);
        carretera_kit         : String(50);
        adjunto               : String(50);
        status                : Boolean; 
        vehiculos             : Association to vehiculos;      
                                                            
}

// las siguientes son los sistemas para reporte de fallas //
entity motor {
    key ID                : UUID;        
        fuga_aceite       : String(50);
        ruido_motor       : String(50);                          
        desajuste         : String(50);
        exeso_humo        : String(50); 
        dano              : String(50);
        causa             : String(50);    
        status            : Boolean; 
        vehiculos         : Association to vehiculos;                                                         
}

entity electrico {
    key ID                : UUID;           
        corto             : String(50);
        pastas_rotas      : String(50);                          
        plumillas         : String(50);
        Bateria           : String(50);
        pito              : String(50);
        luces             : String(50);
        dano              : String(50);
        causa             : String(50);       
        status            : Boolean;       
        vehiculos         : Association to vehiculos;   
}

entity suspension {
    key ID                : UUID;           
        amortiguadores    : String(50);
        hoja_muelle       : String(50);                          
        bujes_barra       : String(50);
        tijeras           : String(50);
        terminales        : String(50);
        dano              : String(50);
        causa             : String(50);       
        status            : Boolean;       
        vehiculos         : Association to vehiculos;         
}

entity transmision {
    key ID                : UUID;           
        cardan            : String(50);
        caja_cambios      : String(50);                          
        palanca_cambios   : String(50);
        diferencial       : String(50);
        ejes              : String(50);
        dano              : String(50);
        causa             : String(50);       
        status            : Boolean;       
        vehiculos         : Association to vehiculos;  
    
}

//----------------------------------------//

entity reporte_maquinaria {
    key ID                   : UUID;            
        fecha                : Date;        
        cabina               : String(50);
	    motor                : String(50);
	    pluma                : String(50);
	    brazo                : String(50);
	    cucharon             : String(50);
	    estabilizador        : String(50);
	    cilindro             : String(50);
        status               : Boolean;
        maquinaria           : Association to maquinaria; 
        conductor            : Association to conductor; 
        
}

entity maquinaria  {
    key ID                         : String(10) not null;            
        tipo                       : String(50);
        fecha                      : Date;
        stock                      : Integer;  
        lubricante_tipo            : String(50);
        medida                     : String(50);
        cantidad                   : Integer;
        status                     : Boolean;
        conductor                  : Association to conductor; 
        reporte_maquinaria         : Association to many reporte_maquinaria
                                        on reporte_maquinaria.maquinaria = $self;   
        fallas_maquinaria          : Association to many fallas_maquinaria
                                        on fallas_maquinaria.maquinaria = $self;
        registro_tiempo            : Association to registro_tiempo;
        actividades                : Association to many actividades
                                        on actividades.maquinaria = $self;                                        
                                                                                    
    // proyecto -> grafo -> actividades -> personal & maquinaria -> reporte de tiempos //                                                    
}

entity fallas_maquinaria {
    key ID                   : UUID;            
        fecha                : Date;        
        cabina               : String(50);
	    motor                : String(50);
	    pluma                : String(50);
	    brazo                : String(50);
	    cucharon             : String(50);
	    estabilizador        : String(50);
	    cilindro             : String(50);
        status               : Boolean;
        maquinaria           : Association to maquinaria;         
                                                                   
}

entity equipos  {
    key ID                   : String(10) not null;            
        tipo                 : String(50);
        marca                : String(50);
        fecha                : Date;
        contador             : Integer;  
        tipo_elementos       : String(50);
        elementos_desgaste   : String(50);
        proyecto             : String(50);
        status               : Boolean;
        registro_tiempo      : Association to registro_tiempo;
                                
        
}

entity registro_tiempo {
    key ID                   : UUID;            
        fecha                : Date;
        hora                 : DateTime;
        observaciones        : String;
        adjunto              : String;
        firma                : String;
        status               : Boolean;
        personal             : Association to many personal
                                on personal.registro_tiempo = $self;
        maquinaria           : Association to many maquinaria
                                on maquinaria.registro_tiempo = $self;
        vehiculos            : Association to many vehiculos
                                on vehiculos.registro_tiempo = $self;
        equipos              : Association to many equipos
                                on equipos.registro_tiempo = $self;

        //proyecto -> grafo -> actividades -> personal & maquinaria -> reporte de tiempos //                                                                               

}

entity personal {
    key documento            : Integer not null;        
        nombre               : String(50);
        apellido             : String(50);
        telefono             : Integer;
        email                : String(45);
        direccion            : String(45);        
        ciudad               : String(50);
        sede                 : String(50);
        status               : Boolean; 
        registro_tiempo      : Association to registro_tiempo;
        actividades          : Association to many actividades
                                on actividades.personal = $self;                                        

       //proyecto -> grafo -> actividades -> personal & maquinaria -> reporte de tiempos //                                                                                
       
}

entity actividades {
    key ID                     : UUID;            
        grafo                  : String(50);
        descripcion_grafo      : String(50);
        codigo_sap_actividad   : String(50);        
        descripcion_actividad  : String(50);
        fecha_inicio           : Date;   //informativo //
        fecha_final            : Date;   //informativo //
        clasificacion          : String(50); //lista desplejable (persona, equipo, transporte)//
        puesto_trabajo_sap     : String(50);
        status                 : Boolean;
        personal               : Association to personal;
        maquinaria             : Association to maquinaria;
        proyectos              : Association to many proyectos
                                   on proyectos.actividades = $self;
       

            //proyecto -> grafo -> actividades -> personal & maquinaria -> reporte de tiempos //  
}

entity proyectos {
    key ID              : UUID;  
        id_sap          : Integer;      
        nombre          : String(50);
        emplazamiento   : String(50);
        fecha_inicio    : Date;                     //Solo informativo //
        fecha_fin       : Date;                     //solo informativo //  
        status          : Boolean;
        actividades     : Association to actividades;
                                        
        
        //proyecto -> grafo -> actividades -> personal & maquinaria -> reporte de tiempos //                                                                               
                                         
} 



//Esta entidad reporta fallas o problemas en los equipos durante la operación del proyecto//
entity incidentes {
    key ID               : UUID;        
        tipo             : String(50);        
        contacto         : Integer;
        fecha_inicio     : Date;
        fecha_fin        : Date;
        ubicacion        : String(50);
        ciudad           : String(50);
        observaciones    : String(50);    
        status           : Boolean;                                                    

}

// Esta entidad almacena los datos de las personas responsables que hacen las autorizaciones //
entity responsables {
    key ID                   : Integer not null;              
        operador             : String(50);
        ingeniero_residente  : String(50);
        estadistica_obra     : String(50);
        ciudad               : String(50);
        ubicacion            : String(50);
        observaciones        : String(50);    
        status               : Boolean;                                                      
}

// Esta entidad almacena los datos de los consumos de combustible en las maquinas, vehículos y equipos//
entity combustible {
    key ID                : UUID;           
        horometro         : Integer;
        kilometraje       : Integer;
        cantidad          : Integer;  
        numero_vale       : Integer;
        tipo              : String(50);          
        observaciones     : String(50);    
        status            : Boolean;
                                                           
} 

entity servicios {
    key ID                   : Integer not null;           
        tipo                 : String(50);
        codigo               : Integer;
        fecha                : Date;
        hora                 : DateTime;
        stock                : Integer;  
        precio               : Double;      
        status               : Boolean;              
                                                         
}

entity repuestos {
    key ID                   : UUID;            
        categoria            : String(50);
        nombre               : String(50);      
        fecha                : Date;
        stock                : Integer;  
        precio               : Double;    
        status               : Boolean;
                                                                 
}

//login de la app //
entity usuarios {
    key ID                   : UUID;           
        fecha                : Date;
        hora                 : Date;
        kilometraje          : Integer;
        observaciones        : String;
        adjunto              : String;
        status               : Boolean;                                                                                                 
}

entity asignaciones {
    key ID                   : UUID;           
        grafo                : String(50);
        id_actividad         : String(50);
        fecha_inicio         : Date;
        fecha_fin            : Date;
        adjunto              : String(50);
        proyecto             : String(50);
        status               : Boolean;                                                                                            
}
