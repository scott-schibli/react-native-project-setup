import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

export const Button: React.FC = (): JSX.Element => {
    return (
        <TouchableHighlight>
            <Text>Hello world</Text>
        </TouchableHighlight>
    );
};
