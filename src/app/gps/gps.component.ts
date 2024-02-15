import { Component, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent {
  showLoading:boolean = false;
  title = 'angular-google-maps';
  // google maps zoom level
  zoom: number = 11;
  // initial center position for the map
  lat: any = 0;
  lng: any = 0;
  markers : any[] = [];

  @ViewChild('AgmMap') agmMap: any;
  @ViewChild('wrapper') wrapper: ElementRef | undefined;
  centerLat: number = 0;
  centerLng: number = 0;
  changeLat: number = 0;
  changeLng: number = 0;

  @HostListener('window:resize')
  onWindowResize() {
    this.onResize();
  }
  constructor(private renderer: Renderer2 ) {
    this.SetZoom();
  }
  ngAfterViewInit() {
    this.renderer.setStyle(
      this.wrapper?.nativeElement, 'height', ((window.innerHeight) - 15) + 'px'
    );
    this.SetZoom();
  }
  SetZoom()
  {
    var m = window.innerWidth;
    var h = window.innerHeight;
    if(m > 500 && h > 600)
      this.zoom = 11;
    else  if(m > 500 && h <= 600)
    this.zoom = 10;
    else if(m <= 375)
      this.zoom = 9;
    else if(m > 375 && m <= 430)
      this.zoom = 10;
    // this.agmMap._mapsWrapper.setStyle("position","initial");
  }
  onResize() {
    // resize the container for the google map
    this.renderer.setStyle(
      this.wrapper?.nativeElement, 'height',((window.innerHeight) - 15) + 'px'
    );
    this.SetZoom();

    // recenters the map to the resized area.
    this.agmMap.triggerResize().then(() =>  
       this.agmMap._mapsWrapper.setCenter({lat: this.centerLat, lng: this.centerLng}));
  }

  // idle fires after paning or zooming is done. 
  // This is where we want to capture the center of the map.
  // This way if the user resizes, the center is preserved.
  idle() {
    this.centerLat = this.changeLat;
    this.centerLng = this.changeLng;
  }

// this event fires whenever any event changes the center. Panning, zooming, or resizing.
  centerChange(event: any) {
    if (event) {
      this.changeLat = event.lat;
      this.changeLng = event.lng;
    }
  }
  
  ngOnInit() {
    this.showLoading = true;
      this.markers = [] //marker list;
      if(this.markers.length > 0)
      {
        this.markers.forEach(element => {
          element.lat = element.Latitude;
          element.lng = element.Longitude;
          element.draggable = false;
        });
        var Latitude = this.markers.map(x=>x.Latitude);
        var Longitude = this.markers.map(x=>x.Longitude);
        var Latitudesum = 0.0;
        Latitude.map(function(val){  Latitudesum += parseFloat(val); });
        this.lat = (Latitudesum / Latitude.length) || 0;
        var Longitudesum = 0.0;
        Longitude.map(function(val){  Longitudesum += parseFloat(val); });
        this.lng = (Longitudesum / Longitude.length) || 0;
      }
      this.showLoading = false;
  }
}
