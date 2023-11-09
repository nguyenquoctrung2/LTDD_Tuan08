import { StyleSheet, Text, View,Button,Image,TouchableOpacity, TextInput } from 'react-native';
function Layout2({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.s1}>
                <TouchableOpacity onPress={()=>navigation.navigate("Layout1")}>
                    <Image source={require("../img/Vector.png")} style={{width:"25px",height:"25px"}}> </Image>
                </TouchableOpacity>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    s1: {
        flex: 1,
      },
})
export default Layout2