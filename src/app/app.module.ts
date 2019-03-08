import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase, environment.firebase.projectId),
        AngularFirestoreModule,
        AngularFireStorageModule,
        CoreModule,
        CategoryModule,
    ],
    providers: [{ provide: FirestoreSettingsToken, useValue: {} }], // SET To silence error.
    bootstrap: [AppComponent]
})
export class AppModule {}
