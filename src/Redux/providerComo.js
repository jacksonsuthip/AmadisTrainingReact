import { Provider } from "react-redux";
import ReduxApp from "./reduxApp";
import store from "./store";

export default function ReduxProviderComp() {
    return (
        <Provider store={store}>
            <ReduxApp />
        </Provider>
    );
}
