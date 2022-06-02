import type { App } from 'vue'
import router from '~/permission'

export function install(app: App) {
  app.use(router)
}
