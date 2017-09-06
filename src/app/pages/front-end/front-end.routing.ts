import { Routes, RouterModule } from '@angular/router';

import { FrontEndComponent } from './front-end.component';

const routes: Routes = [
  {
    path: '',
    component: FrontEndComponent,
    },
];

export const routing = RouterModule.forChild(routes);
