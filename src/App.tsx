import { Provider } from "react-redux";
import { GlobalStyles } from "./config/global/GlobalStyles";
import { AppRoutes } from "./config/routes/AppRoutes";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";


export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SnackbarProvider maxSnack={3}>
          <GlobalStyles />
          <AppRoutes />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  )
}


