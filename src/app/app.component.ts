import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  add_btn: boolean = true;
  del_btn: boolean = true;
  add_marker: boolean = false;

  currentLatitude!: number;
  currentLongitude!: number;
  center: any;

  map_form: FormGroup;

  zoom = 4;
  markerOptions: any = { draggable: false };
  markerPositions: any[] = [];

  // @ViewChild('map') map!: any;

  constructor() {
    this.map_form = new FormGroup({
      location_name: new FormControl('', [Validators.required]),
    });
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongitude = position.coords.longitude;
      console.log(position);
      this.center = { lat: this.currentLatitude, lng: this.currentLongitude };
    });

    this.map_form.controls['location_name'].valueChanges.subscribe((val) => {
      console.log(val);
      if (val !== '') {
        this.add_btn = false;
        // this.add_marker = true;
      } else {
        this.add_btn = true;
        // this.add_marker = false;
      }
    });
  }

  addMarker(event: any) {
    if (!this.add_btn) {
      this.markerPositions.push(event.latLng.toJSON());
    }
    // this.add_marker = false;
    // console.log(event.latLng.toJSON());
  }

  addLocation() {
    this.add_marker = true;
  }

  clearMarkers() {
    // this.markerPositions = [];
  }

  deleteLocation() {}
  ngDoCheck() {
    // console.log(this.map.googleMap.controls);
  }
}
