import { StyleSheet } from "react-native";

export const styles = StlyleSheet.create({
    container: {
        margimBottom: 10,
    },
    imageContainer: {
        heoght: 100,
    },
    image: {
        widht: "100%",
        opacity: 0.2,
        height: 250,
        position:"absolute",
        top: -150,
        resizeMode: "cover",
    },
    titleContainer: {
        paddingHorizontal: 15,
        marginTop: -40,
    },
    backButtom: {
        marginRight: 15,
    },
    title: {
        fontSize: 32,
        fontweight: "bold",
    },
});