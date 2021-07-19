//funcion calcular
function calcular(){
    let celsius = 0, fahrenheit = 0, kelvin = 0;                                    //declaracion e inicializacion variables utilizadas    
    celsius = document.getElementById('tcelsius').value;                            //inicializar varible = extraer valor campo tcelsius
    fahrenheit = document.getElementById('tfahrenheit').value;                      //inicializar varible = extraer valor campo tfahrenheit
    kelvin = document.getElementById('tkelvin').value;                              //inicializar varible = extraer valor campo tkelvin    
    if(celsius.length > 0){                                                         //si longitud valor campo tcelsius > 0, entonces    
        fahrenheit = (parseFloat(celsius) * 9/5) + 32;                              //(0 °C × 9/5) + 32 = 32 °F formula convertir a fahrenheit 
        kelvin = parseFloat(celsius) + parseFloat(273.15);                          //0 °C + 273.15 = 273.15 K  formula convertir a kelvin
    }else{                                                                          //sino, entonces
        if(fahrenheit.length > 0){                                                  //si longitud valor de campo tfahrenheit > 0, entonces
            celsius = (parseFloat(fahrenheit) - 32) * 5/9;                          //(32 °F − 32) × 5/9 = 0 °C formular convertir fahrenheit a celsius
            kelvin = (parseFloat(fahrenheit) - 32) * 5/9 + parseFloat(273.15);      //(0 °F − 32) × 5/9 + 273.15 = 255,372 K formular convertir fahrenheit a kelvin
        }else{                                                                      //sino, entonces
            if(kelvin.length > 0){                                                  //si longitud valor campo tkelvin > 0 entonces
                celsius = parseFloat(kelvin) - parseFloat(273.15);                  //273,15 K − 273.15 = 0 °C formula convertir kelvin a celsius
                fahrenheit = (parseFloat(kelvin) - parseFloat(273.15)) * 9/5 + 32;  //(0 K − 273.15) × 9/5 + 32 = -459,7 °F formula convertir kelvin a fahrenheit
            }                                                                       //fin si
        }                                                                           //fin sino
    }                                                                               //fin sino   
    document.getElementById('tcelsius').value = decimales(celsius);                 //cargar campo mostrar resultados celsius
    document.getElementById('tfahrenheit').value = decimales(fahrenheit);           //cargar campo mostrar resultados fahrenheit
    document.getElementById('tkelvin').value = decimales(kelvin);                   //cargar campo mostrar resultados kelvin    
}
//fin funcion calcular

//funcion calcular longitudes
function calcularLongitudes(){
    let km = 0, millas = 0, metros = 0, yardas = 0;                                 //declarar e inicializar variables utilizadas en la funcion        
    km = document.getElementById('tkm').value;                                      //extraer valor de campo km y reinicializar variables
    millas = document.getElementById('tmillas').value;                              //extraer valor de campo millas y reinicializar variables
    metros = document.getElementById('tmetros').value;                              //extraer valor de campo metros y reinicializar variables
    yardas = document.getElementById('tyardas').value;                              //extraer valor de campo yardas y reinicializar variables    
    if(km.length > 0){                                                              //si longitud valor km > 0, entonces         
        millas = parseFloat(km) / parseFloat(1.609);                                //equivalencia km a millas
        metros = parseFloat(km) * parseFloat(1000);                                 //equivalencia km a metros
        yardas = parseFloat(km) * parseFloat(1094);                                 //equivalencia km a yardas
    }else{                                                                          //sino, entonces
        if(millas.length > 0){                                                      //si longitud valor millas > 0, entonces
            km = parseFloat(millas) * parseFloat(1.609);                            //equivlencia millas a km
            metros = parseFloat(millas) * parseFloat(1609);                         //equivalencia millas a metros
            yardas = parseFloat(millas) * parseFloat(1760);                         //equivalencia milllas a yardas
        }else{                                                                      //sino, entonces
            if(metros.length > 0){                                                  //si longitud valor metros > 0, entonces
                km = parseFloat(metros) / parseFloat(1000);                         //equivalencia metros a km
                millas = parseFloat(metros) / parseFloat(1609);                     //equivalencia metros a millas
                yardas = parseFloat(metros) * parseFloat(1.094);                    //equivalencia metros a yardas
            }else{                                                                  //sino, entonces
                if(yardas.length > 0){                                              //si longitud valor yardas > 0, entonces                                                      
                    km = parseFloat(yardas) / parseFloat(1094);                     //equivalencia yardas a km
                    millas = parseFloat(yardas) / parseFloat(1760);                 //equivalencia yardas a millas
                    metros = parseFloat(yardas) / parseFloat(1.094);                //equivalencia yardas a metros
                }                                                                   //fin si longitud valor yardas > 0
            }                                                                       //fin sino
        }                                                                           //fin sino
    }                                                                               //fin sino
    document.getElementById('tkm').value = decimales(km);                           //mostrar resultados en cada campo km con (6 decimales)
    document.getElementById('tmillas').value = decimales(millas);                   //mostrar resultados en cada campo millas con (6 decimales)
    document.getElementById('tmetros').value = decimales(metros);                   //mostrar resultados en cada campo metros con (6 decimales)
    document.getElementById('tyardas').value = decimales(yardas);                   //mostrar resultados en cada campo yardas con (6 decimales)
}
//fin funcion calcular longitudes

//funcion calcular volumen
function calcularVolumen(){    
    let litros = 0, galones = 0;    
    litros = document.getElementById('tlitros').value;
    galones = document.getElementById('tgalones').value;    
    if(litros.length > 0){
        galones = parseFloat(litros) / parseFloat(3.785);
    }else{
        if(galones.length > 0){
            litros = parseFloat(galones) * parseFloat(3.785);
        }
    }
    document.getElementById('tlitros').value = decimales(litros);
    document.getElementById('tgalones').value = decimales(galones);    
}
//fin funcion calcular volumen

function validar(evt){
    
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9\.]/.test(ch))){                
        evt.preventDefault();
    }    
    
    //si tecla enter, entonces
    if(evt.keyCode == 13){
        //si valor de campo > 0, entonces
        if(document.getElementById('tcelsius').value.length > 0 ||
                document.getElementById('tfahrenheit').value.length > 0 ||
                document.getElementById('tkelvin').value.length > 0){
            //enviar foco al siguiente campo
            document.getElementById('btnCalcular').focus();
        }
        //fin si valor de campo > 0        
    }
    //fin si tecla enter
    
}

//funcion borrar valores de campo
function limpiar(){
    document.getElementById('tcelsius').value='';
    document.getElementById('tfahrenheit').value='';
    document.getElementById('tkelvin').value='';
    document.getElementById('tcelsius').focus();
}
//fin funcion borrar valores de campo

//funcion borrar valores de campo
function limpiarLongitudes(){
    document.getElementById('tkm').value='';
    document.getElementById('tmillas').value='';
    document.getElementById('tmetros').value='';
    document.getElementById('tyardas').value='';
    document.getElementById('tkm').focus();
}
//fin funcion borrar valores de campo
//
//funcion borrar valores de campo
function limpiarVolumen(){
    document.getElementById('tlitros').value='';
    document.getElementById('tgalones').value='';
    document.getElementById('tlitros').focus();
}
//fin funcion borrar valores de campo

//funcion que devuelve el valor solo con 3 decimales al final                   //esta funcion fue extraida de internet
function decimales(n) {                                                         //no me pertenece
  let t = n.toString();                                                         //ni la escribi yo
  let regex = /(\d*.\d{0,6})/;                                                  //la utilizo sin fines comerciales
  return t.match(regex)[0];
}
//fin funcion que devuelve el valor solo con 3 decimales al final

