// Instruction to every other class
// on how they can be argument to addMarker()
interface IMappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementId) as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 2.25,
        zoomControl: true,
      }
    );
  }

  addMarker(mappable: IMappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi',
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
