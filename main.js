const contatti = [
    {
      name: "Michele",
      avatar: "_1",
      messages: [
        {
          date: "10/01/2020 15:30:55",
          message: "Hai portato a spasso il cane?",
          status: "sent",
        },
        {
          date: "10/01/2020 15:50:00",
          message: "Ricordati di dargli da mangiare",
          status: "sent",
        },
        {
          date: "10/01/2020 16:15:22",
          message: "Tutto fatto!",
          status: "received",
        },
      ],
    },
    {
      name: "Fabio",
      avatar: "_2",
      messages: [
        {
          date: "20/03/2020 16:30:00",
          message: "Ciao come stai?",
          status: "sent",
        },
        {
          date: "20/03/2020 16:30:55",
          message: "Bene grazie! Stasera ci vediamo?",
          status: "received",
        },
        {
          date: "20/03/2020 16:35:00",
          message: "Mi piacerebbe ma devo andare a fare la spesa.",
          status: "received",
        },
      ],
    },
    {
      name: "Samuele",
      avatar: "_3",
      messages: [
        {
          date: "28/03/2020 10:10:40",
          message: "La Marianna va in campagna",
          status: "received",
        },
        {
          date: "28/03/2020 10:20:10",
          message: "Sicuro di non aver sbagliato chat?",
          status: "sent",
        },
        {
          date: "28/03/2020 16:15:22",
          message: "Ah scusa!",
          status: "received",
        },
      ],
    },
    {
      name: "Luisa",
      avatar: "_4",
      messages: [
        {
          date: "10/01/2020 15:30:55",
          message: "Lo sai che ha aperto una nuova pizzeria?",
          status: "sent",
        },
        {
          date: "10/01/2020 15:50:00",
          message: "Si, ma preferirei andare al cinema",
          status: "received",
        },
      ],
    },
  ];


const app = Vue.createApp({
    data() {
        return {
            contacts: [
                { id: 1, name: "Michele", avatar: "img/avatar_1.jpg",message: "Hai portato a spasso il cane?" },
                { id: 2, name: "fabio", avatar: "img/avatar_2.jpg" },
                { id: 3, name: "samuele", avatar: "img/avatar_3.jpg" },
                { id: 4, name: "luisa", avatar: "img/avatar_4.jpg" },

                { id: 3, name: "Mario", avatar: "img/avatar_3.jpg" },
                { id: 4, name: "lucia", avatar: "img/avatar_4.jpg" },
                
                { id: 3, name: "Federico", avatar: "img/avatar_3.jpg" },
                { id: 4, name: "Filippo", avatar: "img/avatar_4.jpg" },

                
                { id: 3, name: "Miriam", avatar: "img/avatar_3.jpg" },
                
        ],
        curentContact: null 
    }
    },
    methods: {
      onUserClick(singleContact){
        this.curentContact= singleContact   // perche non mi stampa i messaggi ?
      }
    },
});

app.mount('#app');