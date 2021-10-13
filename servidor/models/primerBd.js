import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const usuario= new Schema({
    nombre:String,   
    documento:String,
    email: String,
    celular:String,
    tipoVivienda:String,
    ciudad:String,
    barrio:String,
    direccion:String,
    contrasena:String,
    repetirContrasena:String,
    plastico:Number,
    vidrio:Number,
    papel:Number,
    organica:Number
    
  //  date:{type: Date, default: Date.now},
  //  activo:{type: Boolean,default:true}
});
//Convertir modelo
const primerBd= mongoose.model('primerBd',usuario);
export default primerBd;