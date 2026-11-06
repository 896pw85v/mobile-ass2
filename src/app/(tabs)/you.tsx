import { View, StyleSheet, Text } from "react-native";

const You = () => {
    return (
        <View style={{ backgroundColor: '#2ba9b0', height: '100%', paddingTop: 100 }}>
            <View style={styles.main}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>you name</Text>
                <Text style={{ fontSize: 12, color: 'white' }}>you name</Text>
                <View style={styles.editBtn}><Text style={{ margin: 'auto', color: '#ffffff', fontWeight: 'bold' }}>Edit Profile</Text></View>
                <Text style={{ ...styles.text, borderBottomWidth: 3, borderBottomColor: '#3837b7' }}>Main</Text>
                <Text style={{...styles.text, fontWeight: '500'}}>Member Since</Text>
                <Text style={styles.text}>Oct 17, 2026</Text>
            </View>
        </View>
    )
}

export default You;

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#0b0b11',
        padding: 40,
        height: '100%',
        marginBottom: 0,
        //  position: 'fixed',
    },
    text: {
        color: 'white',
        margin: 10,
    },
    editBtn: { height: 30, width: '100%', marginHorizontal: 'auto', marginVertical: 20, borderRadius: 10, backgroundColor: '#4045be' ,
        maxWidth: 300
    }
})