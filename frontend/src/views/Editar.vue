<template>
        <div>
        <Header />
            <div class="container">
                
                

                <form action="" class="form-horizontal">
                     <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Nombre</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                            </div>
                            
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">Cedula</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="documento" id="documento" v-model="form.documento">
                          </div>
                        </div> 
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Correo</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="email" id="email" v-model="form.email">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">Celular</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="celular" id="celular" v-model="form.celular">
                          </div>
                        </div> 
                    </div>
                    <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2">Tipo de vivienda</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="tipoVivienda" id="tipoVivienda" v-model="form.tipoVivienda">
                            </div>
                          </div>
                         <div class="col">
                              <label for="" class="control-label col-sm-2">Ciudad</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="ciudad" id="ciudad" v-model="form.ciudad">
                              </div>
                        </div>
                    </div>
                    <div class="form-group left row ">
                        <div class="col">
                              <label for="" class="control-label col-sm-2">Barrio</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="barrio" id="barrio" v-model="form.barrio">
                            </div>
                        </div>
                        <div class="col">
                               <label for="" class="control-label col-sm-2">Direccion</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="direccion" id="direccion" v-model="form.direccion">
                                </div>
                        </div>
                    </div>
                    <div class="form-group left row ">
                        <div class="col">
                              <label for="" class="control-label col-sm-2">Contrasena</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="contrasena" id="contrasena" v-model="form.contrasena">
                            </div>
                        </div>
                        <div class="col">
                               <label for="" class="control-label col-sm-2">Repetir Contrasena</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="repetirContrasena" id="repetirContrasena" v-model="form.repetirContrasena">
                                </div>
                        </div>
                    </div>
                    <div class="form-group left row ">
                        <div class="col">
                              <label for="" class="control-label col-sm-2">Vidrio reciclado(Kg)</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="vidrio" id="vidrio" v-model="form.vidrio">
                            </div>
                        </div>
                        <div class="col">
                               <label for="" class="control-label col-sm-2">papel reciclado(Kg)</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="papel" id="papel" v-model="form.papel">
                                </div>
                        </div>
                    </div>
                    <div class="form-group left row ">
                        <div class="col">
                              <label for="" class="control-label col-sm-2">Materia organica separada</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="organica" id="organica" v-model="form.organica">
                            </div>
                        </div>
                        <div class="col">
                               <label for="" class="control-label col-sm-2">Plastico reciclado(Kg)</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="plastico" id="plastico" v-model="form.plastico">
                                </div>
                        </div>
                    </div>


                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click='grafica(form.id)'>Grafica</button>
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-danger margen" v-on:click="eliminar()" >Eliminar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>
            </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:"Editar",
  components:{
    Header,
    
  },
  data:function(){
    return {

        
        form:{
          'id':'',
          'nombre':'',
          'documento':'',
          'email': '',
          'celular':'',
          'tipoVivienda':'',
          'ciudad':'',
          'barrio':'',
          'direccion':'',
          'contrasena':'',
          'repetirContrasena':'',
          'plastico':0,
          'vidrio':0,
          'papel':0,
          'organica':0
          
        },


      
    }
  },
  methods:{

      grafica(id){
        this.$router.push('/graphic/'+id)
        console.log(id)
      },

     
      editar(){
          axios.put('/actualizar/'+ this.form.id, this.form)
          .then( data =>{
              console.log(data);
          })
      },
      salir(){
        this.$router.push("/dashboard");
      },
      eliminar(){
        axios.delete('/eliminarParametro/'+ this.form.id)

      }
  },
  mounted:function(){
      this.form.id = this.$route.params.id;
      console.log(this.id)
      axios.get('/buscarParametro/'+ this.form.id)
      .then( datos => {
        
        console.log(datos)
        this.form.nombre = datos.data.nombre;
        this.form.documento = datos.data.documento;
        this.form.email = datos.data.email;
        this.form.celular = datos.data.celular;
        this.form.tipoVivienda = datos.data.tipoVivienda;
        this.form.ciudad = datos.data.ciudad;
        this.form.barrio = datos.data.barrio;
        this.form.direccion = datos.data.direccion;
        this.form.contrasena = datos.data.contrasena;
        this.form.repetirContrasena = datos.data.repetirContrasena;
        this.form.plastico = datos.data.plastico;
        this.form.vidrio = datos.data.vidrio;
        this.form.papel = datos.data.papel;
        this.form.organica = datos.data.organica;
        
        
        console.log(this.form)

      })
     
  }  
}
</script>


<style scoped>
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
</style>