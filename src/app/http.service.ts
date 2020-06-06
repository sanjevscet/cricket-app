import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private basePath = 'http://localhost/cricket/crickets/api/';

  // private headers: HttpHeaders = new HttpHeaders({
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // });


  constructor(private http: HttpClient) { }


  async getHero(loginDetails: any): Promise<any> {

    let headers = new HttpHeaders();
// headers = headers.append('Content-Type', 'application/json');

    let response = await this.http.post(this.basePath + 'login', JSON.stringify(loginDetails)).toPromise();
    return response;

    // try {
    //   let response = await this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
    //   return response.json().data as Hero[];
    // } catch (error) {
    //   await this.handleError(error);
    // }
    // let heroes = await this.getHeroes();
    // return heroes.find(hero => hero.id === id);
  }
}
