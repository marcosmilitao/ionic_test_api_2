import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo:"Marcos Militão",
    data:"November 5, 1955",
    descricao:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qntd_likes: 0,
    qntd_comments: 0,
    time_comments: "11h ago"

  }

  public nome_usuario:string = "Marcos";
  public lista_bairros = new Array<any>();
  public lista_filmes = new Array<any>();
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private MovieProvider: MovieProvider
     ) {
  }

  ionViewDidLoad() {
   this.MovieProvider.getLatestMovie().subscribe(
     data=> {

       const response = (data as any);
       const objeto_retorno = JSON.parse(response._body);
       //this.lista_bairros = objeto_retorno.bairros;
       this.lista_filmes = objeto_retorno.results;

       console.log(data);
     },error => {
       console.log(error);
     }
   )

   
  }

}
