import { StyleSheet, Text, View,Button,Image,TouchableOpacity, TextInput } from 'react-native';
function Layout2({navigation}){
    return(
        <Button onPress={()=>navigation.navigate("Layout1")}> </Button>
    );
}
export default Layout2