import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

interface IQueryService {
	queryArtist(name: string): Promise<Observable<any> | undefined>
	//queryArtistConcerts(name: string): Promise<Observable<any> | undefined>
	queryArtistAlbums(artistid: string): Promise<Observable<any> | undefined>
	//queryAlbumTracks(albumid: string): Promise<Observable<any> | undefined>
}

@Injectable({ providedIn: 'root' })
export class QueryService implements IQueryService {
	async queryArtist(name: string): Promise<Observable<any> | undefined> {
		return this.spotify.request(`https://api.spotify.com/v1/search?type=artist&offset=0&limit=5&q=${name}`);
	}

	async queryArtistAlbums(artistid: string): Promise<Observable<any> | undefined> {
		return this.spotify.request(`https://api.spotify.com/v1/artists/${artistid}/albums?market=US&limit=10&offset=0`);
	}

	constructor(
		private spotify: SpotifyService
	) { }
}
