import { Component, OnInit } from "@angular/core";
import { AppareilService } from "../services/appareil.service";

@Component({
  selector: "app-appareil-view",
  templateUrl: "./appareil-view.component.html",
  styleUrls: ["./appareil-view.component.scss"]
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 1000);
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
