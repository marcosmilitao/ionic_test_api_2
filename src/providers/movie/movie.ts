import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {

  //private baseApiPath_mp = "http://d-apps.mprj.mp.br/sgows/api/";
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovie(){
   return this.http.get(this.baseApiPath + "/movie/top_rated?api_key=" + this.getApiKey());
  }
  getBairro(){
    return this.http.get(this.baseApiPath + "/movie/top_rated?api_key=" + this.getApiKey());
  }

  getApiKey(): string{
    return "8b02436bff551d6e5a75cedba0e4713f";
  }
}
