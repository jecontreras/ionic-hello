import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagenModalPage } from '../imagen-modal/imagen-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  instrumentos = [];
  constructor(
    private modalCtrl: ModalController
  ) {
    this.instrumentos = [
      {
        nombre: 'flauta',
        imagen: 'assets/imagenes/flauta.png',
        audio:  'assets/sonidos/flauta.mp3'
      },
      {
        nombre: 'bombo1',
        imagen: 'assets/imagenes/bombo1.png',
        audio:  'assets/sonidos/bombo1.mp3'
      },
      {
        nombre: 'bombo2',
        imagen: 'assets/imagenes/bombo2.png',
        audio:  'assets/sonidos/bombo2.mp3'
      },
      {
        nombre: 'platillos',
        imagen: 'assets/imagenes/platillos.png',
        audio:  'assets/sonidos/platillos.mp3'
      }
    ];

  }
  reproducirSonido(obj){
    let sonido = new Audio();

    sonido.src = obj.audio;

    sonido.load();

    sonido.play();
  }
  ver(img){
    console.log(img);
    
    this.modalCtrl.create({
      component: ImagenModalPage,
      componentProps: {
        imagen: img
      }
    }).then(modal=>modal.present());
  }

}
