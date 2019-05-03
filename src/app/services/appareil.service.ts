import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppareilService {
  appareils = [
    {
      name: "Assis",
      status: "oui"
    },
    {
      name: "Roule",
      status: "oui"
    },
    {
      name: "Fais le mort",
      status: "non"
    },
    {
      name: "Couché",
      status: "oui"
    },
    {
      name: "La patte",
      status: "oui"
    }
  ];

  constructor() {}

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = "oui";
    }
  }
  swithOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = "non";
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = "oui";
  }

  switchOffOne(i: number) {
    this.appareils[i].status = "non";
  }
}
