import { PluginConfig, PluginPlacement } from 'web-extensions-v12';
import { ContentManagerComponent } from './components';

@PluginConfig({
  name: 'offline-plugin',
  description: 'Shows different components of offline module',
  placements: [
    new PluginPlacement({ name: 'content-manager', priortiy: 1, component: ContentManagerComponent
    })
  ]
})
export class OfflinePlugins {
}
