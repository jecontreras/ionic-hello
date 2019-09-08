import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {
  imagen: any;
  constructor(
    private modalCtrl: ModalController,
    private navparams: NavParams
  ) { 

    this.imagen = this.navparams.get('imagen');
    console.log(this.imagen);
    
  }

  ngOnInit() {
  }
  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
