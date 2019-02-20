//import React form react
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
//import styles fro your PokeCard component.
import styles from './styles';


//Define your stateless componetns, and destrcuts props from function arguments
const ProductCard = ({name, url, description,owner, navigation}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => 
        
        navigation.navigate('DetailScreen', {url})}>
        <View style={styles.cont}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.pokeItemHeader}>{name}</Text>
                <Text style={styles.ItemDEsc}>{description}</Text>

            </View>
            <View style={styles.contImg}>
              <Image style={styles.ownerAvatar} source={{uri:owner.avatar_url}} />
            </View>
        </View>
        </TouchableOpacity>
    )
}


export default ProductCard;