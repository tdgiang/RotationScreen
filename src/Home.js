import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Orientation from 'react-native-orientation';


export default class AppScreen extends Component {

    UNSAFE_componentWillMount() {
        //Kiểm tra màn hình đang ở chế độ nào
        const initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            console.log("Đang ở chế độ khóa màn hình")

        } else {
            console.log("Đang ở chế độ tắt khóa màn hình")
        }
    }

    componentDidMount() {
        // Chế độ màn hình dọc
        //Orientation.lockToPortrait();

        //Chuyển sang chế độ màn hình ngang
        Orientation.lockToLandscape();

        // Chuyển tất cả các hướng
        //Orientation.unlockAllOrientations();

        Orientation.addOrientationListener(this._orientationDidChange);
    }

    _orientationDidChange = (orientation) => {
        if (orientation === 'LANDSCAPE') {
            console.log("Đang ở chế độ tắt khóa màn hình")
        } else {
            // do something with portrait layout
        }
    }
    componentWillUnmount() {
        Orientation.getOrientation((err, orientation) => {
            console.log(`Current Device Orientation: ${orientation}`);
        });
        // Remember to remove listener
        Orientation.removeOrientationListener(this._orientationDidChange);
    }

    render() {
        return (
            <View>
                <Text>Helllooo world</Text>
            </View>

        )
    }
}
