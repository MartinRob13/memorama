class Memorama{

    constructor(){
        this.totaltarjetas = [];
        this.numeroTarjetas = 0;
        this.verificadorTarjetas = [];
        this.errores = 0;
        this.nivelDificultad = '';
        this.imagenesCorrectas = [];
        this.agregadorTarjetas = [];

        this.$contenedorTarjetas = document.querySelector('.contenedor-tarjetas');
        this.$contenedorGeneral = document.querySelector('.contenedor-general');
        this.$pantallaBloqueada = document.querySelector('.pantalla-bloqueada');
        this.$mensaje = document.querySelector('.h2.mensaje');
        ///llamaddo a los eventis
        this.eventos();
    }

    eventos(){
        window.addEventListener('DOMContentLoaded', () =>{
            this.cargaPantalla();

        });
    }

    async cargaPantalla(){
        const respuesta = await fetch('../memo.json');
        const data = await respuesta.json();
        console.log(data); 
    }

}

new Memorama();