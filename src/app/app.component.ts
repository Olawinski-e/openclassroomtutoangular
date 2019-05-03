import { Component, OnInit } from "@angular/core";
import { AppareilService } from "./services/appareil.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "WHY I LOVE MODJO";
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
    console.log("Il maitrise touuuuuut!");
  }

  onEteindre() {
    if (
      confirm("Vous êtes sûr de lui enlever toute cette maitrise de la force?")
    ) {
      this.appareilService.swithOffAll();
    } else {
      return null;
    }
  }
}
