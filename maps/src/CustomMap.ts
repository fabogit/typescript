// Instruction to every other class
// on how they can be argument to addMarker()
export interface IMappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  markerContent(): string;
}

export class CustomMap {
  // expose only Map() and Marker()
  private googleMap: google.maps.Map;
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementId) as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        zoomControl: true,
      }
    );
  }

  addMarker(mappable: IMappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      label: mappable.color,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
