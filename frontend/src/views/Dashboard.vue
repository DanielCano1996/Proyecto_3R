<template>
    <div>
        <Header/>

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo usuario</button>
                <br><br>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">CEDULA</th>
                        <th scope="col">TELEFONO</th>
                        <th scope="col">CORREO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in ListaUsuario" :key="usuario._id" v-on:click="editar(usuario._id)">
                        <td>{{ usuario._id }}</td>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.documento }}</td>
                        <td>{{ usuario.celular }}</td>
                        <td>{{ usuario.email }}</td>
                    </tr>
            
                </tbody>
                </table>

            </div>

        <Footer />
    </div>
</template>
<script>


import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return {
            ListaUsuario:null,
            pagina:1
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
            editar(id){
               this.$router.push('/editar/' + id);
               console.log(id)
            },
            nuevo(){
                this.$router.push('/nuevo');
            }
    },
    mounted:function(){
        let direccion = "/buscarTodo";
        axios.get(direccion).then( data =>{
            this.ListaUsuario = data.data;
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>