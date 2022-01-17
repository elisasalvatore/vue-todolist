//Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//- text, una stringa che indica il testo del todo
//- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo. 
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: 
//cliccando su di essa, il todo viene rimosso dalla lista.

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
    },
    methods: {
        removeItemList: function(index) {
            this.todo.splice(index, 1); //significa:"voglio cancellare UN item partendo dall'INDEX iniziale"
        },
    },
});