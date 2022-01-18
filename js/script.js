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

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente 
//(se done era uguale a false, impostare true e viceversa)

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
                done: false,
            },
            {
                text: "Fare il bucato",
                done: false,
            },
        ],
        temporaryItem: '', //nell'input andremo a scrivere il nuovo item da inserire
    },
    methods: {
        getDone: function(i) {
            // this.todo[i].done === false;
            // if (!this.todo[i].done ){
            //     this.todo[i].done = true;
            // } else {
            //     this.todo[i].done = false;
            // }
            this.todo[i].done = !this.todo[i].done; //deve essere il contrario di sè stesso
        },
        removeItemList: function(index) {
            this.todo.splice(index, 1); //significa:"voglio cancellare UN item partendo dall'INDEX iniziale"
        },
        addItem: function() {
            this.todo.push({
                text: this.temporaryItem,
                done: false,
            }); //richiamiamo il temporaryItem scritto dall'utente per poi aggiungerlo alla lista 
            this.temporaryItem = ''; //per lasciare il placeholder dell'input vuoto una volta aggiunto un nuovo item
        },
    },
});