import { defineStore } from 'pinia'
import { CustomSchedules } from '@/utils/types';

interface State {
  authenticated: boolean
}

export const useAuthUserStore = defineStore('schedules', {
  // convert to a function
  state: (): State => ({
    authenticated: false
  }),
  getters: {
    isAuthenticated(): boolean {
        return this.authenticated;
      },
  },
  actions: {
    setAuthenticated(): void {
      this.authenticated = false;
      // explicitly do not use local storage for handling authentication
      // google will automatically perform token refreshes/sign ins
      // localStorage.isAuthenticated = authenticated;
    },
  }
})