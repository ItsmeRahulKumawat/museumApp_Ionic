import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit{

  constructor(public alertCtrl: AlertController) { }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Success',  
      // subHeader: 'Confirmation',  
      message: 'Your Feedback Submitted Successfully',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
  
  ngOnInit() {
  }

}
