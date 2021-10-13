<template>
    <div>
        <Header />
            <div class="container">
                
                <div id="msg"></div>
 
                <!-- Mensajes de Verificación -->
                <div id="error" class="alert alert-danger ocultar" role="alert">
                    Las Contraseñas no coinciden, vuelve a intentar !
                </div>
                <div id="ok" class="alert alert-success ocultar" role="alert">
                    Las Contraseñas coinciden ! (Procesando formulario ... )
                </div>
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
                              <label for="" class="control-label col-sm-2">Plastico reciclado(Kg)</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="plasico" id="plastico" v-model="form.plastico">
                            </div>
                        </div>
                        <div class="col">
                               <label for="" class="control-label col-sm-2">Vidrio reciclado(Kg)</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="vidrio" id="vidrio" v-model="form.vidrio">
                                </div>
                        </div>
                    </div>
                    <div class="form-group left row ">
                        <div class="col">
                              <label for="" class="control-label col-sm-2">papel reciclado(Kg)</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="papel" id="papel" v-model="form.papel">
                            </div>
                        </div>
                        <div class="col">
                               <label for="" class="control-label col-sm-2">Materia organica separada</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="organica" id="organica" v-model="form.organica">
                                </div>
                        </div>
                    </div>


                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click=" guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>


            </div>
        <!-- <Footer /> -->

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"Nuevo",
    data:function(){
        return {
            form:{
                nombre:'',
                documento:'',
                email: '',
                celular:'',
                tipoVivienda:'',
                ciudad:'',
                barrio:'',
                direccion:'',
                contrasena:'',
                repetirContrasena:'',
                plastico: 0.0,
                vidrio:0.0,
                papel:0.0,  
                organica:0.0,       
                date:{type: Date, default: Date.now},
                activo:{type: Boolean,default:true}
            }
        }
    },
    components:{
        Header,
        //Footer
    },
    methods:{
        guardar(){
            
            axios.post("/nuevo-registro",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","Usuario creado","success");
                this.$router.push("/dashboard");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
        },
        salir(){
            this.$router.push("/dashboard");
        },
        makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        },
    
        
    }
}
</script>
<style scoped>
.left{
    text-align:  left;
}
.ocultar {
    display: none;
}
 
.mostrar {
    display: block;
}
</style>