import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

interface IQueryService {
	getArtist(name: string): Promise<Observable<any> | undefined>
	//getArtistConcerts(name: string): Promise<Observable<any> | undefined>
	getArtistAlbums(artistid: string): Promise<Observable<any> | undefined>
	//getAlbumTracks(albumid: string): Promise<Observable<any> | undefined>
}

@Injectable({ providedIn: 'root' })
export class QueryService implements IQueryService {
	async getArtist(name: string): Promise<Observable<any> | undefined> {
		return this.spotify.request(`https://api.spotify.com/v1/search?type=artist&offset=0&limit=5&q=${name}`);
	}

	async getArtistAlbums(artistid: string): Promise<Observable<any> | undefined> {
		return this.spotify.request(`https://api.spotify.com/v1/artists/${artistid}/albums?market=US&limit=10&offset=0`);
	}

	constructor(
		private spotify: SpotifyService
	) { 
		if (!spotify.authorized)
			spotify.authorize();
	}
}
