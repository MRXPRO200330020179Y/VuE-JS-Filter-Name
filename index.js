const App = {
    data(){
       return{
        serchName:'',
        names:['Vlad', 'Max', 'Elena', 'Igor', 'MrX']
       }
    },

    computed:{
        filteredNames(){
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.serchName.toLowerCase()) !== -1
            })
        }
    },

    //  при клик

    // methods:{
    //     filtere(){
    //         return this.names = this.filteredNames
    //     }
    // }
}
Vue.createApp(App).mount('#app');