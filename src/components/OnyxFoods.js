import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import React from 'react';
import style from '../Style';
import Onyx, {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';

const OnyxFoods = ({foods = []}) => {
    const [foodName, setFootName] = React.useState();
    const handleTextChange = text => {
        setFootName(text);
    };
    return (
        <View>
            <Text style={style.text}>Onyx foods: {JSON.stringify(foods)}</Text>
            <TextInput onChangeText={handleTextChange} value={foodName} />
            <TouchableOpacity
                style={style.button}
                onPress={() => {
                    Onyx.merge(ONYXKEYS.FOODS, [foodName]);
                    setFootName('');
                }}>
                <Text>Add One Food!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default withOnyx({
    foods: {
        key: ONYXKEYS.FOODS,
    },
})(OnyxFoods);
