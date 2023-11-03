import { StyleSheet, Text, View,Button,Image,TouchableOpacity, TextInput } from 'react-native';
import { useState } from "react";
function Layout1({navigation}){
    return(
        <View style={styles.container}> 
            <View style={styles.style1}> 
                <Image source={require("../img/AnhLayout1.png")}
                style={{width:"250px",height:"250px"}}></Image>
            </View>
            <View style={styles.style2}> 
                <Text style={styles.text1}>MANAGE YOUR {'\n'} TASK</Text>
            </View>
            <View style={styles.style3}> 
                <View style={styles.con}> 
                    <Image source={require("../img/mailpng.png")}
                        style={{width:"30px",height:"28px"}}></Image>
                    <TextInput placeholder='Enter your email' style={{
                        height:'80%',width:'100%'}}></TextInput>
                </View>
            </View>
            <View style={styles.style4}> 
                <TouchableOpacity style={{height:'25%',width:'60%',
            backgroundColor:'cyan',borderRadius:'10px', alignItems:'center'}} 
            onPress={()=>{navigation.navigate("Layout2")}}><Text style={{textAlign:'center',
            padding:'10px',color:'white',fontSize:16,fontFamily:"Inter"}}>GET START</Text></TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:'10px',
    },
    style1: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        paddingTop :82,
    },
    style2: {
        flex: 1,
        paddingTop : 30,
    },
    style3: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    con:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:'1px',
        borderRadius:'10px',
        height:'50%',
        width:'90%',
        position:'relative',
        gap:10,
    },
    style4: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'20px',
    },
    text1:{
        fontSize: 22,
        fontWeight:'bold',
        color:'#8353E2',
        textAlign:'center',
    },
})
export default Layout1