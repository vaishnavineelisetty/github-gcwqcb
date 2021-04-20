import { Component } from "@angular/core";
import { Movies } from "./movies";
import { SevicingService } from "./sevicing.service";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "Bookmyshow";
  page: boolean[] = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];
  locations = [
    { id: "Hyderabad", name: "Hyderabad" },
    { id: "Vijayawada", name: "Vijayawada" },
    { id: "Chennai", name: "Chennai" },
    { id: "Mumbai", name: "Mumbai" },
    { id: "Delhi", name: "Delhi" }
  ];
  constructor(private ser: SevicingService, private router: Router) {}
  movie: Movies[] = this.ser.cinema;
  Nav(n: number) {
    for (let i = 0; i < this.page.length; i++) this.page[i] = false;
    this.page[n] = true;
  }

  navigate(n: number) {
    if (n === 13) {
      this.router.navigateByUrl("/SignUp");
    } else if (n === 14) {
      this.router.navigateByUrl("/login");
      // this.router.navigate(["../login"], { relativeTo: this.route });
    }
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    infinite: false
  };
}
