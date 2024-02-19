import { Component } from '@angular/core';
import { UserdataService } from './userservice/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-tut';
  customerData:any[]=[]

  constructor(private userData:UserdataService)
  {
    this.userData.getUsers(1).subscribe((userData:any)=>{
      this.customerData=userData
    })
  }
}
