import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Design from '@/components/Design';
import Manufacturing from '@/components/Manufacturing';
import Careers from '@/components/Careers';
import SupportAlcoMeasure from '@/components/SupportAlcoMeasure';
import Contacts from '@/components/Contacts';

Vue.use(Router);

// Running in "Non-History" mode so that it uses hashes to force the URL to not look like a normal URL.
// This allows AMS to properly serve up the pages.
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Design',
      name: 'Design',
      component: Design
    },
    {
      path: '/Manufacturing',
      name: 'Manufacturing',
      component: Manufacturing
    },
    {
      path: '/Careers',
      name: 'Careers',
      component: Careers
    },
    {
      path: '/SupportAlcoMeasure',
      name: 'SupportAlcoMeasure',
      component: SupportAlcoMeasure
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    // We could use a 404 error page, but it may be better to just send them straight back to home.
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: NotFound
    // },
    { path: '*',
      redirect: { name: 'Home' }
    },
  ],
  scrollBehavior() {
    // This causes the app to scroll back to the top whenever when of the router links is followed.
    // Without this, if the home page is scrolled halfway down and then the user clicks on "About",
    // the about page will be shown halfway down as well.
    document.getElementById('app').scrollIntoView();
  }
});