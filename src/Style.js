import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 4,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'cornflowerblue',
        padding: 8,
        margin: 8,
        borderRadius: 10,
    },
    scroll: {
        paddingBottom: 100,
    },
    h3: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 12,
        marginBottom: 12,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        margin: 10,
    },
    input: {borderWidth: 1, width: 180, height: 40},
});
