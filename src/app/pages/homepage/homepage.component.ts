import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
//import { GoogleMapsModule } from '@angular/google-maps';
import Swal from 'sweetalert2';

interface Info {
  id:number;
  email: string;
  first_name: string;
  last_name: string;
  avatar:string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    page = 1;
    pageSize =4;
    collectionSize=1;
    currentRate = 8;
    total_pages =1;
    UsersList:Array<Info>=[];
    apiloading='';
    lat='';
    lng='';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getLocation();
    this.api.viewOtherUsers().subscribe((response:any)=>{
      this.UsersList = response.data;
      console.log(this.UsersList);
      this.page = response.page;
      this.pageSize = response.per_page;
      this.collectionSize = response.total;
      this.total_pages = response.total_pages;

      this.api.viewUsers().subscribe((res:any)=>{
  
      });
    },(error)=>{

    });

  }
  getLocation(){
    this.api.getLocationService().then((response:any)=>{
      this.lat = response.lat;
      this.lng = response.lng;
      // console.log(lat, lng);
      // this.displayName(lat,lng);
    })
  }
  // displayName(latitude, longitude){
  //   var latLng= new google.maps.LatLng(lat, lng);

  //   //making the geocoder requestr
  //   var geoCoder = new google.maps.Geocoder();
  //   geoCoder.geocode({'latLng': latLng},(results, status)=>{
  //     if(status != google.maps.GeocoderStatus.OK){
  //       alert(status);
  //     }
  //   });
  // }
  onDelete(id:any){
    this.api.deleteUser(id).subscribe(
      (response)=>{
        Swal.fire('success','User deleted successfully','success');
        // this.ngOnInit();
      },
      (error)=>{
        Swal.fire('error', error.message, 'error');
      });
  }

}
