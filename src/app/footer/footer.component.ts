import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userservice/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  customerData:any[]=[]
  input:string=''

  constructor(private userData:UserdataService) {
   }

  ngOnInit(): void {
    // console.log(this.customerData);
  }
  getResult()
  {
      this.userData.getUsers(Number(this.input)).subscribe((data:any)=>{
      this.customerData=data.data
      console.log(this.customerData)
    })
    // console.log(this.customerData)
  }

}
