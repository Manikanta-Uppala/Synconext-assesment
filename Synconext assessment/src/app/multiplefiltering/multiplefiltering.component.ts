import { Component, OnInit } from '@angular/core';
import { MultiplefilterService } from '../multiplefilter.service';
import { Users } from '../Users';

@Component({
  selector: 'app-multiplefiltering',
  templateUrl: './multiplefiltering.component.html',
  styleUrls: ['./multiplefiltering.component.css']
})
export class MultiplefilteringComponent implements OnInit {

  lat: any;
  long: any;
  users: Users[] = [];


  constructor(public rs: MultiplefilterService) { }

  ngOnInit(): void {
   this.rs.getUsers().subscribe((response: any) => {
     this.users = response;
   });
  }

  searchbylat(): any {
   if (this.lat === '') {
     this.ngOnInit();
   }
   else{
      this.users = this.users.filter(res => {
        return res.lat.toLocaleLowerCase().match(this.lat.toLocaleLowerCase());
      });
   }
  }

  searchbylong(): any {
    if (this.long === '') {
      this.ngOnInit();
    }
    else{
       this.users = this.users.filter(res => {
         return res.long.toLocaleLowerCase().match(this.long.toLocaleLowerCase());
       });
    }
   }
  }

