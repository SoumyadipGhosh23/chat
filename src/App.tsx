import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';
import Chat from './components/Chat';

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor : 'white' }}>
            <Header />
            <Stories />
            <Chat />
        </SafeAreaView>
    );
}

export default App;
