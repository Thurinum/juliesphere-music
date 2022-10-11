import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistAlbumTracksComponent } from './components/artist-details/artist-albums/artist-album-tracks/artist-album-tracks.component';
import { ArtistAlbumsComponent } from './components/artist-details/artist-albums/artist-albums.component';
import { ArtistConcertsComponent } from './components/artist-details/artist-concerts/artist-concerts.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/artist/null', pathMatch: 'full' },
	{ path: 'artist', redirectTo: '/artist/null', pathMatch: 'full' },
	{
		path: 'artist/:id', component: ArtistDetailsComponent,
		children: [
			{ path: 'albums', component: ArtistAlbumsComponent },
			{ path: "albums/:id", component: ArtistAlbumTracksComponent },
			{ path: "albums/:id/tracks", component: ArtistAlbumTracksComponent },
			{ path: "concerts", component: ArtistConcertsComponent },
		]
	},
	{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
