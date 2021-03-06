import {StyleSheet} from 'react-native';
    
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#232F40',
      width: '100%',
      flex: 0, 
      height: '100%',
    },

    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#101D35',
        alignItems: "center",
    },

    header_title: {
        color: '#F7F6EE',
        alignItems: 'flex-end',
        marginLeft: 30,
        fontSize: 20,
        marginTop: 20,
    },

    arrow: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
    },

    input: {
        width: '80%', 
        marginTop: 33,
        color: '#F7F6EE',
        borderBottomColor: '#F7F6EE',
        borderBottomWidth: 0.5,
        marginLeft: 10,
    },

    birthTitle: {
        fontSize: 16,
        color: '#F2C894',
        marginRight: 66,
    },

    birthDate: {
        alignItems: "center",
        marginBottom: 33,
        justifyContent: "center",
        marginLeft: 86,
        borderBottomColor: '#F7F6EE',
        borderBottomWidth: 0.5,
    },

    birthDate_component: {
        color: '#F7F6EE',
        width: 100,
        height: 50,
    },

    addressTitle: {
        fontSize: 16,
        color: '#F2C894',
        marginRight: 140,
    },

    birthDate_date: {
        color: '#F7F6EE',
        fontSize: 16,
        width: 100,
    },

    sexo: {
        width: 200,
    },

    button: {
        width: '70%',
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2a950',
        marginBottom: 40,
        marginTop: 50,
    },

    button_text: {
        color: '#101D25',
        fontWeight: 'bold',
        fontSize: 20,
    },

    row: {
        flexDirection: "row",
    },

    halfLg: {
        width: '57%',
    },

    halfSm: {
        width: '20%',
    },
});


export default styles;
  

  