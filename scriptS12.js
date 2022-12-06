class Alumno {
    constructor(codigo,nombre,nota1,nota2,nota3,nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    get nombre(){
        return `El alumno del codigo ${this.codigo} es ${this._nombre}`
    }
    set nombre(nuevo){
      this._nombre = nuevo
    }
    promedio = function(){
        let operar = (this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4)
        return operar 
    }
    condicion = function(){
        let resultado = "";
        if(alumno.promedio()>= 12){
            resultado = "Estás Aprobado"
        }else{
            resultado = "Estás Desaprobado"
        }
        return resultado;

    }
    obsequio = function(){
        let resultado = "";
        if(alumno.promedio()>= 17){
            resultado = "Te ganastes una mochila"
        }else{
            resultado = "No te llevaste nada"
        }
        return resultado;
    }
}
let alumno = new Alumno("7314", "charles", 17,17,17,17)
console.log(alumno.nombre)
console.log(alumno.promedio())
console.log(alumno.condicion())
console.log(alumno.obsequio())