import Action from "./components/action";
import CanScene from "./components/can/can-scene";
import { AppProvider } from "./store/app_data";

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <div className="environment">
          <CanScene />
        </div>
        <Action />
      </div>
    </AppProvider>
  );
};

export default App;
