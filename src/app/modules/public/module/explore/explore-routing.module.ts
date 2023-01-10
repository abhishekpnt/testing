import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreContentComponent } from './components/explore-content/explore-content.component';
import { ExploreCurriculumCoursesComponent } from './components/explore-curriculum-courses/explore-curriculum-courses.component';

import { ViewAllComponent } from '../../../content-search/components/view-all/view-all.component';
const routes: Routes = [
  {
    path: '', loadChildren: () => import('../../../explore-page/explore-page.module').then((m) => {return m.ExplorePageModule}).catch( err => console.log('Oh no!', err) )
  },
  // {
  //   path: 'view-all/:section/:pageNumber', component: ViewAllComponent,
  //   data: {
  //     telemetry: {
  //       env: 'explore', pageid: 'view-all', type: 'view', subtype: 'paginate'
  //     },
  //     filterType: 'explore',
  //     softConstraints: { badgeAssertions: 98, board: 99, channel: 100 },
  //     applyMode: true
  //   }
  // },
  // {
  //   path: ':pageNumber', component: ExploreContentComponent, data: {
  //     telemetry: {
  //       env: 'explore', pageid: 'explore-search', type: 'view', subtype: 'paginate'
  //     },
  //     softConstraints: { badgeAssertions: 98, channel: 100 }
  //   }
  // },
  // {
  //   path: 'list/curriculum-courses', component: ExploreCurriculumCoursesComponent, data: {
  //     telemetry: {
  //       env: 'curriculum-courses', pageid: 'curriculum-courses', type: 'view', subtype: 'paginate'
  //     },
  //   }
  // }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
