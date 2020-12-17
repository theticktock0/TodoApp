import React, {Component} from 'react';
import { FlatList, Text, View } from 'react-native';
import { deleteHistory } from '../redux/actions/history';
import { connect } from 'react-redux'
import { Card } from 'react-native-paper';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

function secondScreen(props){
    console.log(props)
    return(
        <LinearGradient colors={['#8548BE','#054AA5']} useAngle={true} angle={45} angleCenter={{x:0.5, y:0.5}} style={{flex:1}}>

        <MI name='arrow-back' size={30} color='white' style={{position:'absolute', top:30, left:10}} onPress={() => props.navigation.popToTop()}/>

            <View style={{flexDirection:'row', marginTop:'20%'}}>
            <View style={{alignItems:'center', flex:1}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:'white'}}>Original Price</Text>
            </View>
            <View style={{alignItems:'center', flex:1}}>
                <Text style={{fontSize:16, fontWeight:'bold', marginRight:'15%', color:'white'}}>Discount</Text>
            </View>
            <View style={{alignItems:'center', flex:1}}>
                <Text style={{fontSize:16, fontWeight:'bold', marginRight:'40%', color:'white'}}>Final Price</Text>
            </View>
            </View>
            <FlatList style={{marginTop:'5%'}}
                    data = {props.historys}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item, index}) => {
                    return(
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row', marginTop:'5%'}}>
                        <View style={{alignItems:'center', flex:1}}>
                            <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'15%', color:'white'}}>{item.original}</Text>
                        </View>
                        <View style={{alignItems:'center', flex:1}}>
                            <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'35%', color:'white'}}>{item.discount}</Text>
                        </View>
                        <View style={{alignItems:'center', flex:1}}>
                            <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'35%', color:'white'}}>{item.final}</Text>  
                        </View >
                        <View style={{alignItems:'center'}}>
                        <MCI name="delete" color='white' size={20} onPress={() => props.delete(item.key)} style={{marginLeft:'10%'}}/>
                        </View>
                        </View>
                    </View>
                    )}}
                />

        </LinearGradient>
    )
}

const mapStateToProps = (state) => {
    return{
        historys: state.historyReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        delete: (key) => dispatch(deleteHistory(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(secondScreen);