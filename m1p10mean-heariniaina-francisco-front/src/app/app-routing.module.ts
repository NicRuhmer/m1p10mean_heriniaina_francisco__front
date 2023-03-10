import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepotComponent } from "./components/depot/depot.component";
import { ReparationComponent } from './components/reparation/reparation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { AvancementComponent } from './components/avancement/avancement.component';
import { FactureComponent } from './components/facture/facture.component';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: LandingComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "depots", component: DepotComponent },
  { path: "voitures", component: VoitureComponent },
  { path: "historiques", component: HistoriqueComponent },
  { path: "reparation", component: ReparationComponent },
  { path: "avancement/:id", component: AvancementComponent },
  { path: "facture/:id", component: FactureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
