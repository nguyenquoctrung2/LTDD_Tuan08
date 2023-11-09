import { useEffect, useState } from "react";
import { View,StyleSheet, Text, StatusBar, SafeAreaView, ScrollView, Pressable, Image, FlatList, TextInput, TouchableOpacity  } from "react-native";
function Layout1({navigation}) {
    const [data,setData] = useState([]);
     const [error,setError]= useState(null);

     const ApiDATA = async()=>{
       try{
        const response= await fetch('https://654cf1f377200d6ba859c0c7.mockapi.io/tuan8');
        if(!response.ok){
          throw new Error('Loi khi nhap lieu tu API');
        }
 const data = await response.json();
setData(data);
      }catch(err){
        setError(err);
      }
     };
      useEffect(()=>{
    ApiDATA();
      },[]);


      const [searchDonut, setSearchDonut] = useState('');
      const [dataSearchDonut, setDataSearchDonut] = useState(data);
      useEffect(() => {
          const filteredData = data.filter(item => item.name.toLowerCase().includes(searchDonut.toLowerCase()));
          setDataSearchDonut(filteredData);
      }, [searchDonut, data]);

      const [selectedTad, setSelectedTab] = useState('Donut');
      const handleSelectedTab = (tabName) => {
          setSelectedTab(tabName);
          setSearchDonut(tabName);
      }


const renderItem =({item})=>(
<View style={{width:'100%', height:120,flexDirection:'row',backgroundColor:'white'}}>
<Pressable style={{width:'100%',justifyContent:'center',alignItems:'flex-start',flexDirection:'row',backgroundColor:'#F4DDDD',margin:5,borderRadius:10}}
onPress={()=>{
}}>
  <View>
     <Image source={{uri:item.img}}
       style={{width:111, height:101}}
></Image>
</View>
<View style={{justifyContent:'center',width:200,gap:'10px'}}>
   <Text style={{fontWeight:'bold', margin:5}}>{item.name}</Text>
   <Text>{item.description}</Text>
   <Text style={{fontWeight:'bold', margin:5}}>${item.price}</Text>
</View>
<View style={{top:50}}> 
  <Image source={require('../img/plus_button.png')}
         style={{width:44,height:45}}
   >
  </Image>
</View>
</Pressable>

</View>

)


     return(
        <View style={{flex:1,margin:'10px'}}>
     
         <SafeAreaView style={{flex:1}}>
           <ScrollView style={{flex:1}} stickyHeaderIndices={[0]} >
             <View>
              <View  style={{backgroundColor:'white',height:200}}>
                <Text style={{color:'gray'}}>Welcome,Jala</Text>
                <Text style={{fontWeight:'bold',fontSize:20}}>Choice Your Best Food</Text>
                 <TextInput placeholder='Search food' style={{width:300, height:40,borderWidth:1,marginTop:40}}></TextInput>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', top:30}}>
                  <TouchableOpacity    onPress={() => handleSelectedTab('Donut')} style={{borderRadius:5, borderWidth:1,width:80, height:40,margin:5}}><Text style={{padding:8}}>Donuts</Text></TouchableOpacity>
                  
                  <TouchableOpacity   onPress={() => handleSelectedTab('Pink Donut')}
                  style={{borderRadius:5, borderWidth:1,width:95, height:40,margin:5}}><Text style={{padding:8}}>Pink Donut</Text></TouchableOpacity>
                  <TouchableOpacity  onPress={() => handleSelectedTab('Floating Donut')}
                  
                  style={{borderRadius:5, borderWidth:1,width:80, height:40,margin:5}}><Text style={{padding:8}}>Floating</Text></TouchableOpacity>
                </View>


              </View>
       </View>
        <FlatList
           data={dataSearchDonut}
            renderItem={renderItem}
            keyExtractor={item =>item.id}
        ></FlatList>


           </ScrollView>
         </SafeAreaView>
        </View>
   )
}
export default Layout1