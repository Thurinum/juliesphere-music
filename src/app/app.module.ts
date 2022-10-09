import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';


import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistAlbumsComponent } from './components/artist-details/artist-albums/artist-albums.component';
import { ArtistAlbumTracksComponent } from './components/artist-details/artist-albums/artist-album-tracks/artist-album-tracks.component';
import { ArtistConcertsComponent } from './components/artist-details/artist-concerts/artist-concerts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		CardComponent,
		ArtistListComponent,
		ArtistDetailsComponent,
		ArtistAlbumsComponent,
		ArtistAlbumTracksComponent,
		ArtistConcertsComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,

		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatTabsModule,
		MatSnackBarModule,
		MatIconModule,
		MatDividerModule,
		MatRippleModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
