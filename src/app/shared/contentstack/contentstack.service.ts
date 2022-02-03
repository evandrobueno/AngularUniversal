import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentstackService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) readonly platformId: Object) { }

  getPage(rout:string) {
    const head= new HttpHeaders()
    .append('api_key', 'bltcaf0f69fd3523988')
    .append('access_token', 'cs5ba26d83b7b3505e11c454fd');
    return this.http.get('https://cdn.contentstack.io/v3/content_types/exemplo_content_type/entries?environment=exemplo_environment&query={"rout":"' + rout + '"}', {headers:head}).pipe(
      map((pages: any) => pages.entries[0]));;
  }
}
