import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { ModalPage } from './modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
 abcd2 = {	
	age: false,
	pressure: false, 
	clinical: 0,
	duration: 0,
	diabetes: false,
	ABCDtotal: 0,
	headcolor: 'primary'	
	}	
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public params: NavParams, public alertCtrl: AlertController) {
  }

  	reCalc() {
	    this.abcd2.ABCDtotal = (this.abcd2.age ? 1 : 0) + (this.abcd2.pressure ? 1 : 0) + (this.abcd2.clinical === 0 ? 0 : (this.abcd2.clinical === 1 ? 1 : 2)) + (this.abcd2.duration === 0 ? 0 : (this.abcd2.duration === 1 ? 1 : 2)) + (this.abcd2.diabetes ? 1 : 0);
	    this.abcd2.headcolor = this.abcd2.ABCDtotal == 0 ? 'primary' : (this.abcd2.ABCDtotal >0 && this.abcd2.ABCDtotal <4 ? 'secondary' : (this.abcd2.ABCDtotal >3 && this.abcd2.ABCDtotal <7 ? 'yellow' : 'danger'));

	}

	reSet(fab){
		 //fab.close()
		this.abcd2.age = false;
		this.abcd2.age = false;
		this.abcd2.pressure = false 
		this.abcd2.clinical = 0;
		this.abcd2.duration = 0;
		this.abcd2.diabetes = false;
		this.abcd2.headcolor = 'primary';
		this.reCalc();
	}	

	presentCalcModal() {
		let abcd2go = this.abcd2;
   		let calcModal = this.modalCtrl.create(ModalPage, {abcd2go});
   		calcModal.present();
 	}

 	popUpInfo() {
    let alert = this.alertCtrl.create({
      title: '<h3 text-center>ABOUT</h3>',
      subTitle: '<p>CDC ABCD<sup>2</sup> Calc Challenge entry.</p><p>A hack-up by Adam Morley.</p>',
      buttons: ['OK']
    });
    alert.present();
  }

}
