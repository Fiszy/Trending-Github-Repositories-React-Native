import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        flex: 1,
        flexDirection: 'column'
    },
    pokeItemHeader: {  
        color: '#000',
        fontSize: 24,
       
    },
    ItemDEsc: {  
        color: '#454545',
        fontSize: 12,
       
    },
    cont:{
        flex: 1,
        flexDirection: 'row'
    },
    ownerAvatar: {
        backgroundColor: 'transparent',
        height:100, 
        width:'100%',  
     
    },
    contImg:{
        padding: 10,
        justifyContent: 'center',

        height:'100%', 
        width:'35%',  
        alignItems:'center' 
    },
})

export default styles;