import React, {Component, useEffect, useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { addHistory } from '../redux/actions/history';
import { connect } from 'react-redux'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

function firstScreen(props){

    const [original, setOriginal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [save, setSave] = useState(0);
    const [final, setFinal] = useState(0);
    const [data, setData] = useState(null);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        var x = original * discount;
        var y = x/100;
        var z = original - y

        function saver(x, y, z){
            var w = parseFloat(y).toFixed(2)
            var q = parseFloat(z).toFixed(2)

            setSave(w)
            setFinal(q)

            var e = {original, discount, q}
            setData(e)
            console.log(data)
        }
        saver(x, y, z)

    },[original, discount, final])

    const addToHistory = () => {
        if(disable == false){
            props.add(data)
            console.log(data)
            setDisable(true)
        }
    }

    return(
        <LinearGradient colors={['#8548BE','#054AA5']} useAngle={true} angle={45} angleCenter={{x:0.5, y:0.5}} style={{flex:1}}>

            <MCI name='history' size={40} color='white' style={{position:'absolute', top:30, right:30}} onPress={() => props.navigation.navigate('Second')}/>

            <TextInput
                label="Original Price"
                value={original}
                onChangeText={original => {setOriginal(original), setDisable(false)}}
                style={{marginLeft:20, marginRight:20, marginTop: '30%'}}
                mode='outlined'
                keyboardType='decimal-pad'
            />
            <TextInput
                label="Discount Percentage %"
                value={discount}
                onChangeText={discount => {setDiscount(discount), setDisable(false)}}
                style={{marginLeft:20, marginRight:20, marginTop: '5%'}}
                mode='outlined'
                keyboardType='number-pad'
            />

            <View style={{flexDirection:'row', marginLeft:20, marginRight:20, marginTop:'20%'}}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>
                    You Save:     RS 
                </Text>
                <Text style={{fontSize:18, fontWeight:'bold', marginLeft:8, color:'white'}}>
                    {save}
                </Text>
            </View>

            <View style={{flexDirection:'row', marginLeft:20, marginRight:20, marginTop:'5%'}}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>
                    Final Price:   RS
                </Text>
                <Text style={{fontSize:18, fontWeight:'bold', marginLeft:8, color:'white'}}>
                    {final}
                </Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:'10%'}}>
                <MCI name='content-save' color='white' size={40} onPress={addToHistory}/>
            </View>

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
        add: (history) => dispatch(addHistory(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(firstScreen);