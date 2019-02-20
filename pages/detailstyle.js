
import { StyleSheet } from 'react-native';

//Define your styles 
const styles = StyleSheet.create({
   maincont: {
    flex:1,
    flexDirection:'column',
    },
    pokemonImage: {
        height: 300,
        width: 250,
        marginTop:20,
        marginLeft: 50,
        alignItems:'center',
    },
    proditem: {
        fontSize: 25,
        margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center' 
    },
    prodDesc: {
        fontSize: 15,
        margin:10,
        color:'#454545', 
        textAlign:'center' 
    },
    trendCount: {
     padding:10,

      alignItems: "stretch",
      justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal:20,
        backgroundColor:'#999999',
 
         
    },
    trendfolk: {
   
      
    },
    trendHead:{
        fontWeight:'bold', 
    },
    dateStyle:{
        fontSize:15,
        fontStyle:"italic",
        margin:10,
		 textAlign:'center' 
    },
    wrap:{
        justifyContent:'center',
        textAlign:'center',
        margin:10,
        alignItems:'center',
      
    

      },
    profilepicWrap:{
        width:180,
        height:180,
        borderRadius:100,
        borderColor:'rgba(0,0,0,0.4)',
        borderWidth:16,
 
      
      },
      profilepic:{
        flex:1,
        width:null,
        alignSelf:'stretch',
        borderRadius:100,
        borderColor: '#fff',
        borderWidth:4
      },

      butt:{color: 'blue', backgroundColor:'black', textAlign:'center', width:150,padding:20}


})

//Export your styles
export default styles;