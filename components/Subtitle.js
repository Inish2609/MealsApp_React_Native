import { StyleSheet, Text, View } from "react-native";

export default function Subtitle(props){
    return (
        <View style={style.subtitleContainer}>
            <Text style={style.subtitle}>{props.children}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    subtitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    subtitleContainer:{
        padding:6,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2
    }
})