import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components';
import { LandingpageGuard } from './services';
import { OfflineApplicationDownloadComponent } from '../shared/components/offline-application-download/offline-application-download.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent, canActivate: [LandingpageGuard],
    data: { telemetry: { env: 'public', pageid: 'landing-page', type: 'edit', subtype: 'paginate' } }
  },
  {
    path: 'desktop', loadChildren: () => import('./module/offline/offline.module').then(m => m.OfflineModule).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'explore', loadChildren: () => import('./module/explore/explore.module').then(m => m.ExploreModule).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'explore-course', loadChildren: () => import('./module/course/course.module').then(m => m.CourseModule).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'explore-groups', loadChildren: () => import('./module/group/group.module').then(m => m.GroupModule).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'signup', loadChildren: () => import('./module/signup/signup.module').then(m => m.SignupModule).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'sign-in/sso', loadChildren: () => import('./module/sign-in/sso/sso.module').then(m => m.SsoModule).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'play', loadChildren: () => import('./module/player/player.module').then(m => m.PlayerModule).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'download/desktopapp', component: OfflineApplicationDownloadComponent
  },
  {
    path: 'faq', loadChildren: () => import('./module/help/help.module').then(m => m.HelpModule).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'guest-profile', loadChildren: () => import('./module/guest-profile/guest-profile.module').then(m => m.GuestProfileModule).catch( err => console.log('Oh no!', err) )
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
