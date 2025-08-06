import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NativeStack, { RootStackParamList } from './src/navigation/NativeStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <>
      <NativeStack />
    </>
  );
}

export default App;
