const app = new Vue(
    {
        el: '#root',
        data: {
            message: "Finalmente qualcosa di figo con JS!",
            classe: 'model',
        },
        // method: {
        //     show() {
        //         document.getElementById("#test").style.display = "block";
        //     }
        // }
    }
);

// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.