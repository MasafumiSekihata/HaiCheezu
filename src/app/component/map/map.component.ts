import * as L from 'leaflet';
import { POSITIONS } from './../../models/positions';
import { Component, OnInit } from '@angular/core';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map:any;

  constructor() { }

  ngOnInit(): void {
    const positions = POSITIONS;

    // 地図表示
    this.map = L.map('mapid').setView([39.701466735486,141.13637223899], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    positions.forEach(position => {
      L.marker([position.latitude, position.longitude], {title:position.name}).addTo(this.map);
    });
//    for (any position : positions) {
//      L.marker([position.latitude, position.longitude], {title:position.name, draggable:true}).addTo(this.map);
//    }

  }

}
