Vue.config.devtools = true;

const app = new Vue(
    {

        el: "#root",
        data: {

            counterActiveImg: 0,
            
            slides: [

                {

                    items: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'

                },

                {

                    items: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'

                },

                {

                    items: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'

                },

                {

                    items: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'

                },

                {

                    items: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'

                },

            ]
        },
        methods: {

            buttonNext: function() {

                if( this.counterActiveImg < this.slides.length - 1 ){
                    this.counterActiveImg++;
                } else{
                    this.counterActiveImg = 0;
                }

            },

            buttonLast: function() {

                if( this.counterActiveImg > 0 ){
                    this.counterActiveImg--;
                } else{
                    this.counterActiveImg = this.slides.length - 1;
                }

            },

            zoomImg: function(index) {

                this.counterActiveImg = index;

            },

            cronoAdd: function() {

                setInterval(() => {

                    this.buttonNext();

                }, 3000);

            },


        },
        created: function(){
            this.cronoAdd();
            
        },
        
    }
    
);

