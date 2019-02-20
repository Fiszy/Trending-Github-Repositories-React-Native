import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text,StyleSheet, View ,Image, FlatList, Share,SafeAreaView, Linking} from 'react-native';

import styles from './detailstyle';
import Moment from 'moment';





class Details extends Component {
      constructor(props) {
    super(props);
    this.state = {
	isLoading :true,
    name: '',
    image:'',
  
    interval: null,
    description:'',
    fullname:'',
    folkcount:'',
    issues: '',
    subs:'',
    date:'',
    ownername:'',
    own:[],
    repo:'',
    url: '',


    };
  }
    // Setting up profile activity title.
 static navigationOptions= ({navigation}) =>({
      title: `REPOSITORY DETAILS `,


 });



  	fetchData = async() =>{
		const { params } = this.props.navigation.state;
		const response =  await fetch(params.url);

		const Product = await response.json(); // Ads have array data

       // this.setState({data: Product});
       console.log(Product);
      // console.log("https://javascriptapi.herokuapp.com/product/" +params._id);
       
        
        this.setState({
            name: Product.name,
         
            description: Product.description,
            fullname: Product.full_name,
            folkcount: Product.forks_count,
            issues: Product.open_issues_count,
            subs: Product.subscribers_count,
            date: Product.created_at,
            ownername: Product.owner.login,
            own: Product.owner,
            repo: Product.stargazers_count,
            url: Product.html_url
       
        });
	};
	componentDidMount(){
		this.fetchData();

	}
    componentWillMount() {
      this.setState({interval: setInterval(() => {
     
        }, 5000)});
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }


  numberComma=(x)=>{
		var parts = x.toString().split(".");
		parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,  ",");
		return parts.join(".");
	}
  callSeller=(p)=>{
    Linking.openURL('tel:'+p);
  }
  	  onLearnMore = (item) => {
    this.props.navigation.navigate('Detail', { ...item });
  };
  render() {
      const { params } = this.props.navigation.state;

    return (
        <View style={styles.maincont}>

        <Text style={styles.proditem}> {this.state.name}</Text>
        <Text style={styles.prodDesc}> {this.state.description}</Text>

        <View style={styles.trendCount}>
        <View style={styles.trendfolk}>
            <Text style={styles.trendHead}> Stars</Text>
           <Text> {this.numberComma(this.state.repo)}</Text>
          </View>
          <View style={styles.trendfolk}>
            <Text style={styles.trendHead}> Folks</Text>
           <Text> {this.numberComma(this.state.folkcount)}</Text>
          </View>

          <View style={styles.trendfolk}>
            <Text style={styles.trendHead}> Subscribers</Text>
           <Text> {this.numberComma(this.state.subs)}</Text>
          </View>
        </View>
        <Text style={styles.dateStyle}>Created on {Moment(this.state.date).format('D MMMM YYYY')} at {Moment(this.state.date).format('LT')} </Text>
        <Text style={styles.proditem} > Owner: <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL(this.state.own.html_url)}>
  {this.state.own.login}
</Text></Text> 
        <View style={styles.wrap}>
        <View style={styles.profilepicWrap}>
                <Image style={styles.profilepic} source={{   uri: this.state.own.avatar_url}} />
               </View>
               </View>
               <View style={styles.wrap}>
               <TouchableOpacity style={styles.butt}  onPress={() => Linking.openURL(this.state.url)}>
                 <Text style={{color: 'white', textAlign:'center'}}>View On Github</Text>
               </TouchableOpacity>
               </View>

       
    </View> 
    );
  }
}



export default Details;
