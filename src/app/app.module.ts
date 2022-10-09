import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';
import { ArtistConcertsComponent } from './artist-details/artist-concerts/artist-concerts.component';
import { ArtistAlbumTracksComponent } from './artist-albums/artist-album-tracks/artist-album-tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailsComponent,
    ArtistAlbumsComponent,
    ArtistConcertsComponent,
    ArtistAlbumTracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
