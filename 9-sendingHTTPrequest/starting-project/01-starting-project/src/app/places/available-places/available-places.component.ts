import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private placeServices = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placeServices.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places.set(places);
      },
      error: (err: Error) => {
        console.log(err);
        this.error.set(err.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.placeServices
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe({
        next: (value) => console.log(value),
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
