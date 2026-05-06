import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/app/components/RootLayout";
import { HomePage } from "@/app/pages/HomePage";
import { AboutPage } from "@/app/pages/AboutPage";
import { RoomsPage } from "@/app/pages/RoomsPage";
import { FacilitiesPage } from "@/app/pages/FacilitiesPage";
import { GalleryPage } from "@/app/pages/GalleryPage";
import { RulesPage } from "@/app/pages/RulesPage";
import { ContactPage } from "@/app/pages/ContactPage";
import { LoginPage } from "@/app/pages/LoginPage";
import { NotFound } from "@/app/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "rooms", Component: RoomsPage },
      { path: "facilities", Component: FacilitiesPage },
      { path: "gallery", Component: GalleryPage },
      { path: "rules", Component: RulesPage },
      { path: "contact", Component: ContactPage },
      { path: "login", Component: LoginPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
