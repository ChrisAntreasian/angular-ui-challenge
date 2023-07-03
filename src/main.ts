import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MetricsModule } from './app/metrics.module';


platformBrowserDynamic().bootstrapModule(MetricsModule)
  .catch(err => console.error(err));
