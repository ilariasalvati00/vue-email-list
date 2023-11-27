const { createApp } = Vue;

const options = {
    data() {
        return {
            lista: [],
            contatore: 0,
            loaded: false
        }
    },
    methods:{
        check_loaded: function(){
            console.log("activated")
            if (this.loaded){
                return "visible";
            }
            else{
                return "";
            }
        },
        set_invisible_when_loaded: function(){
            if (this.loaded){
                return "";
            }
            else{
                return "visible";
            }
        }
    },
    mounted: function(){
        for(let i = 0; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response =>{
                const result = response.data;
                this.lista.push(result["response"]);
                this.contatore++;
                if (this.contatore >= 10){
                    this.loaded=true;
                    console.log(this.loaded);
                }
            })
        }
    }
}

createApp(options).mount("#app");