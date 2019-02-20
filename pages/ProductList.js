//import PoreCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';
//import comopnents
import ProductCard from './ProductCard';
//import your components from react-native 
import {  FlatList, ActivityIndicator, RefreshControl } from 'react-native';
//import styles for your component
import styles from './styles';

export default class ProductList extends PureComponent {
    //Define your state for your component. 
    state = {
        //Assing a array to your pokeList state
        pokeList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true,
        refresh:false,
    }
    //Define your navigation options in a form of a method so you have access to navigation props.
    static navigationOptions = {
        title: 'Trending Repos'
    }
    //Define your componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous. 
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
          //  const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
             const productApiCall = await fetch('https://api.github.com/search/repositories?q=language:Java&sort=stars&order=desc');
            const product = await productApiCall.json();
            this.setState({pokeList: product.items, loading: false});
        } catch(err) {
            console.log("Error fetching products-----------", err);
        }
    }
    rfetchData = async() =>{
        try {
            //Assign the promise unresolved first then get the data using the json method. 
          //  const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
             const productApiCall = await fetch('https://api.github.com/search/repositories?q=language:Java&sort=stars&order=desc');
            const product = await productApiCall.json();
            this.setState({pokeList: product.items, loading: false});
        } catch(err) {
            console.log("Error fetching products-----------", err);
        }
	

	};
    _handleRefresh(){
        //	this.setState({refresh:true,page:1,data:[]});
        this.setState({loading:true});
            this.rfetchData().then(()=>{
               
                this.setState({refresh:false});
            });
        }
     renderFooter=() =>{
			if(!this.state.loading) return null;
		return <View style={{paddingVertical:20,borderTopWidth:1, borderTopColor:'#CED0CE'}}>
						      <ActivityIndicator animating size="large" />
					</View>
		;
    }
    handlemore=()=>{
       
        this.renderFooter();
	};
    render() {
        //Destruct pokeList and Loading from state.
        const { pokeList, loading } = this.state;
        //Destruct navigation from props 
        const { navigation } = this.props;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList 
                    data={pokeList}
                    renderItem={(data) => <ProductCard {...data.item} navigation={navigation} />}
                    keyExtractor={(item) => item.name} 
                    refreshControl={
						<RefreshControl
						refreshing={this.state.refresh}
						onRefresh={this._handleRefresh.bind(this)}
					
						/>
                    }
                    onEndReached={this.handlemore}
                    onEndThreshold={0}
                    ListFooterComponent= {this.renderFooter}
                    
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}

//mkdir -p android/app/src/main/assets && rm -rf android/app/build && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android && ./gradlew clean assembleDebug && cd ../
