import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KomentaraiService } from '../komentarai.service';
import { Komentaras } from '../komentaras.model';

@Component({
  selector: 'app-komentarai',
  templateUrl: './komentarai.component.html',
  styleUrls: ['./komentarai.component.css']
})
export class KomentaraiComponent implements OnInit, OnDestroy {

  public komentarai: Komentaras[] = [];
  public loading: boolean = false;
  public error: string;
  public errorSubscription: Subscription;

  constructor(private komentaraiService: KomentaraiService) { }

  ngOnInit(): void {
    this.loadKomentarai();
    this.errorSubscription = this.komentaraiService.error.subscribe((error)=>{
      this.error = error;
    })
  }

  ngOnDestroy(){
    this.errorSubscription.unsubscribe();
  }


  send(email: string, text: string){
    console.log(email, text);
    this.komentaraiService.postKomentaras(email, text).subscribe(()=>{
      this.loadKomentarai();
      this.error = null;
    }, (error)=>{
         this.error = error.message;
      });
  }

  loadKomentarai(){
    this.loading = true;
    this.komentaraiService.getKomentarai().subscribe((data)=>{
      console.log(data);
      this.komentarai = data;
      this.loading = false;
    }, (error)=>{
      this.error = error.message;
    })
  }

}
