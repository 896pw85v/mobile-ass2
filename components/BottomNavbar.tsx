"use client";
import { Text, StyleSheet, View, Image, Pressable, Alert } from "react-native";
import { Link } from "expo-router";
const iconPath = "https://picsum.photos/seed/c/300";

const BottomNavbar = () => {
    return (
        <div style={styles.bar}>
            <Link href="/" style={styles.nav}>
                <Nav desc="Home" icon={iconPath} />
            </Link>
            <Link href="/(tabs)/notification">
                <Nav desc="Notification" icon={iconPath} />
            </Link>
            <Link href="/(tabs)/you">
                <Nav desc="You" icon={iconPath} />
            </Link>
        </div>
    );
};

type NavProp = {
    desc: string,
    icon: any
}

const Nav = ({ desc, icon }: NavProp) => (

    <View style={styles.nav}>
        <Image source={{ uri: icon }} alt="Icon" style={styles.navIcon} />
        <Text style={styles.desc}>{desc}</Text>
    </View>

);

export default BottomNavbar;

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 5,
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#282932'
    },
    navIcon: {
        height: 20,
        width: 20,
    },
    desc: {
        fontSize: 10,
        margin: 'auto',
        color: '#c8c9cf'
    },
    nav: {
        height: 40,
        width: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

})