import Signup from "@/components/authComps/Signup.vue";
import About from "@/components/aboutComps/About.vue";
import Contact from "@/components/Contact.vue";
import Home from "@/components/homeComps/Home.vue";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout.vue";
import Homelayout from "@/layouts/HomepageLayout/Homelayout.vue";
import Login from "@/components/authComps/Login.vue";
import DetailsPage from "@/components/pages/DetailsPage.vue";
import Account from "@/components/pages/Account.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Homelayout,
    children: [
      { path: "", name: "HomePage", component: Home },
      { path: "about", name: "AboutPage", component: About },
      { path: "contact", name: "ContactPage", component: Contact },
      {path: "product", name: "DetailsPage", component: DetailsPage},
      {path: "account", name: "AccountPage", component: Account},
      {
        path: "auth",
        name: "AuthPage",
        component: AuthLayout,
        meta: { requiresGuest: true },
        redirect: "/auth/signup",
        children: [
          { path: "signup", name: "SignUp", component: Signup },
          { path: "login", name: "Login", component: Login },
        ],
      },
    ],
  },
];
