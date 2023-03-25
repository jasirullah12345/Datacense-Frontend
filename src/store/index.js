// third-party
import {configureStore} from '@reduxjs/toolkit';
import {Provider, useDispatch as useAppDispatch, useSelector as useAppSelector} from 'react-redux';
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer} from 'redux-persist';
import {encryptTransform} from "redux-persist-transform-encrypt";
import {PersistGate} from "redux-persist/integration/react";
import storage from 'redux-persist/lib/storage';

// project import
import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //


const persistConfig = {
    keyPrefix: process.env.REACT_APP_APP_NAME.toLowerCase() + '-',
    key: 'store',
    storage,
    transforms: [
        // For Store Encryption in LocalStorage
        encryptTransform({
            secretKey: 'developed-by-jasir-ullah-khan',
            onError: function (error) {
                console.log("Error during encryption", error);
            },
        }),
    ],
    // whitelist : ["amount"],
    // blacklist : ["amount"],
}

// Persist All reducers
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

const persistor = persistStore(store);

const {dispatch} = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

const ReduxPersisted = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};

export {store, dispatch, useSelector, useDispatch, ReduxPersisted};
