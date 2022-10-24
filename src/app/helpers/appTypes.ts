import { appStore } from 'app/store/appStore'

export type AppState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch