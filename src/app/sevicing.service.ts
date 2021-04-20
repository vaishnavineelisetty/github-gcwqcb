import { Injectable } from '@angular/core';
import { Movies } from './movies'
@Injectable({
  providedIn: 'root'
})
export class SevicingService {
  constructor() { }
  public cinema: Movies[] = [
    { name: "Vakeel Saab", genre: "Action", language: "Telugu", image: "./assets/1.jpg", visible: true },
    { name: "Rang De", genre: "Drama", language: "Telugu", image: "/assets/2.jpg", visible: true },
    { name: "Sulthan", genre: "Drama", language: "Telugu", image: "/assets/3.jpg", visible: true },
    { name: "Wild Dog", genre: "Action", language: "Telugu", image: "/assets/4.jpg", visible: true },
    { name: "Tom & Jerry", genre: "Comedy", language: "English", image: "/assets/5.jpg", visible: true },
    { name: "Godzilla vs Kon", genre: "Action", language: "English", image: "/assets/6.jpg", visible: true },
    { name: "Roohi", genre: "Comedy", language: "Hindi", image: "/assets/7.jpg", visible: true },
    { name: "Bansuri", genre: "Drama", language: "Hindi", image: "/assets/8.jpg", visible: true },
    { name: "Voyagers", genre: "Adventure", language: "English", image: "/assets/9.jpg", visible: true },
    { name: "The Mouritanian", genre: "Thriller", language: "English", image: "/assets/10.jpg", visible: true },
    { name: "Deyyam", genre: "Horror", language: "Telugu", image: "/assets/11.jpg", visible: true },
    { name: "Tenet", genre: "Thriller", language: "English", image: "/assets/12.jpg", visible: true }
  ]
}
