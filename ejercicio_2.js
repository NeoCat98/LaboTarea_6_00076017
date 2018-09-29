var convertor = class{
    convertir(medida,unidadA,unidadB,tipo){
        if (tipo=="L") {
            if (unidadA=="m" && unidadB=="cm") {
                return medida*100;
            }
            else if (unidadA=="cm" && unidadB=="m") {
                return medida*0.01;
            }
            else if (unidadA=="km" && unidadB=="m") {
                return medida*1000;
            }
            else if (unidadA=="m" && unidadB=="km") {
                return medida*0.001;
            }
            else if (unidadA=="ft" && unidadB=="m") {
                return medida*0.3048;
            }
            else if (unidadA=="m" && unidadB=="ft") {
                return medida*3.28;
            }
            else{
                console.log('Las medidas que se ingreso no son correctas.\n Verifique que esten en minuscula');
            }
        }
        else if(tipo=="T"){
            if (unidadA=="C" && unidadB=="F") {
                return (9*medida/5)+32;
            }
            else if (unidadA=="F" && unidadB=="C") {
                return 5*(medida-35)/5
            }
            else if (unidadA=="K" && unidadB=="F") {
                return (9*(medida-273.15)/5)+32;
            }
            else if (unidadA=="F" && unidadB=="K") {
                return (5*(medida-32)/9)+273.15;
            }
            else if (unidadA=="K" && unidadB=="C") {
                return medida-273.15;
            }
            else if (unidadA=="C" && unidadB=="K") {
                return medida+273.15;
            }
            else{
                console.log('Las medidas que se ingreso no son correctas.\n Verifique que esten en mayusculas');
            }
        }
        else{
            console.log('El tipo de medida que ingreso no esta disponible. ');
        }
    }
}