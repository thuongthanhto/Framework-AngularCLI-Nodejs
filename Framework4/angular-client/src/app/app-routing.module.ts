import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home.component";   

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes, {enableTracing: true}
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}