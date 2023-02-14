
import { Provider } from "react-redux";



import { Store } from "./store";
import { LogBox } from "react-native";

LogBox.ignoreLogs(['Warning...']);

LogBox.ignoreLogs(["Warning..."]);
LogBox.ignoreAllLogs();

import RootNavigation from "./src/navigation/rootnavigation";

const App = () => {
  return (

    <Provider store={Store}>
    
      <RootNavigation />
    </Provider>






    )}
  

export default App;