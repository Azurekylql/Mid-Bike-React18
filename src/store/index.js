import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//存储配置
const persistConfig = {
    //localstorage中的key
    key: 'Mid App',
    //存储位置
    storage
}

// 持久化reducer
const Reducer = persistReducer(persistConfig, menuReducer)

//创建持久化store
const store = configureStore({
    reducer: {
        menu: Reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

const persistor = persistStore(store)

export { store, persistor }