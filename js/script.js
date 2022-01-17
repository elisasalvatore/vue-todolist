//Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//- text, una stringa che indica il testo del todo
//- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo. 
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: 
//cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: 
//cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
//che quindi viene aggiunto alla lista dei todo esistenti.

new Vue({
    el:"#app",
    data: {
        todo: [
            {
                text: "Fare i compiti",
                done: false,
            },
            {
                text: "Fare la spesa",
                done: true,
            },
            {
                text: "Fare il bucato",
                done: false,
            },
        ],
        temporaryItem: '', //nell'input andremo a scrivere il nuovo item da inserire
    },
    methods: {
        removeItemList: function(index) {
            this.todo.splice(index, 1); //significa:"voglio cancellare UN item partendo dall'INDEX iniziale"
        },
        addItem: function() {
            this.todo.push({
                text:this.temporaryItem,
                done: false,
            }); //richiamiamo il temporaryItem scritto dall'utente per poi aggiungerlo alla lista 
            this.temporaryItem = ''; //per lasciare input vuoto una volta aggiunto un nuovo item
        },
    },
});