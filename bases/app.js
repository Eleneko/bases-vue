const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <!-- Entre las llaves se pueden poner expresiones de js validas, no todas funcionan
    //  por ejemplo el if no funciona pero podemos usar un ternario reemplazando el if
    //  Se pueden llamar funciones-->
  
    // <p> {{ !true ? 'Activo': 'Inactivo' }} </p>
    // <p> Desde app.js </p>
    // `

    data() {
        return {
            // message: 'Hola mundo desde return de app owo'
            quote: "Meow meow meow",
            author: "Gato"
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola mundo uwu')
            this.author = 'Gato enojado'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },
        
    
})

app.mount('#myApp')

