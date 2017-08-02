import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

	abcd2;
	a;
	b;
	c;
	d;
	e;
	aa;
	bb;
	cc;
	dd;
	ee;
	explain;

	constructor(public viewCtrl: ViewController, public params: NavParams){
		this.abcd2 = this.params.get('abcd2go');
	}
		
	 dismiss() {
	   this.viewCtrl.dismiss();
	 }

	 ionViewDidLoad(){
	 	this.a = this.abcd2.age == false ? "<60" : ">60";
	 	this.aa = this.abcd2.age == false ? "0 points" : "1 point";
	 	this.b = this.abcd2.pressure == false ? "No" : "Yes";
	 	this.bb = this.abcd2.pressure == false ? "0 points" : "1 point";
	 	this.c = this.abcd2.clinical == 0 ? "None" : (this.abcd2.clinical == 1 ? "Speech disturbance" : "Unilateral Weakness");
	 	this.cc = this.abcd2.clinical == 0 ? "0 points" : (this.abcd2.clinical == 1 ? "1 point" : "2 points");
	 	this.d = this.abcd2.duration == 0 ? "<10" : (this.abcd2.clinical == 1 ? "10-59" : ">60");
	 	this.dd = this.abcd2.duration == 0 ? "0 points" : (this.abcd2.clinical == 1 ? "1 point" : "2 points");
	 	this.e = this.abcd2.diabetes == false ? "No" : "Yes";
	 	this.ee = this.abcd2.diabetes == false ? "0 points" : "1 point";
	 	console.log(this.a);
	 	this.explain = this.abcd2.ABCDtotal == 0 ? "No risk" : (this.abcd2.ABCDtotal < 4 ? "2 day risk = 1.0%, 7 day risk = 1.2%" : (this.abcd2.ABCDtotal > 3 && this.abcd2.ABCDtotal < 6 ? "2 day risk = 4.1%, 7 day risk = 5.9%" : "2 day risk = 8.1%, 7 day risk = 11.7%"));
	 }
}
