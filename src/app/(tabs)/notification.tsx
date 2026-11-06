import { View, Text } from "react-native";

 const Notification = () => {
    return ( 
        <View style={{ backgroundColor: '#0b0b11', height: '100%' }}>
            <Text style={{margin: 'auto', backgroundColor: 'white', width: 200, height: 50, textAlign: 'center', display: 'flex', alignItems: 'center',justifyContent: 'center',borderRadius: 20 }}>this is notification page</Text>
        </View>
    )
}

export default Notification;