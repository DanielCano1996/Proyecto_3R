<template>
  <header>
    
          <!--Inicio Graficas -->
            <v-row>
              <v-col cols="3"> </v-col>
              <v-col cols="5">
                <v-card
                  class="mx-auto text-center"
                  color="green"
                  dark
                  max-width="2000"
                >
                  <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                      <v-sparkline
                        :value="value"
                        color="rgba(50,205,50)"
                        height="100"
                        padding="24"
                        stroke-linecap="round"
                        smooth
                      >
                        <template v-slot:label="item">
                          {{ item.value }}
                        </template>
                      </v-sparkline>
                    </v-sheet>
                  </v-card-text>

                

                  <v-divider></v-divider>

                  <v-card-actions class="justify-center">
                    <v-btn block text color="rgba(50, 205, 90)"> Canjear Puntos </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <!--Fin Graficas-->
        
   
    
    <!-- fin pie del sitio -->
  </header>
</template>

<script>
export default {};
</script>

<!-- script graficas-->
<script>
import axios from 'axios';
export default {
  data: () => ({
        value:[],
        label:['plastico','vidrio','papel','organico'],
        
        

        form:{
            'id':'',
            
            
            
        },
        
    
            
  }),

  methods:{


  },
  mounted:function(){
      this.form.id = this.$route.params.id;
      console.log(this.id)
      axios.get('/buscarParametro/'+ this.form.id)
      .then( datos => {
        
        console.log(datos)
        
        this.value.push( datos.data.plastico);
        this.value.push( datos.data.vidrio);
        this.value.push( datos.data.papel);
        this.value.push(datos.data.organica)
        
        
        console.log(this.value)

      })
     
  }
};
</script>

<style scoped>

</style>