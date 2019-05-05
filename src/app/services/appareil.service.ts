import { Injectable } from "@angular/core";
import { tick } from "@angular/core/src/render3";

@Injectable({
  providedIn: "root"
})
export class AppareilService {
  appareils = [
    {
      id: 1,
      name: "Assis",
      status: "oui"
    },
    {
      id: 2,
      name: "Roule",
      status: "oui"
    },
    {
      id: 3,
      name: "Fais le mort",
      status: "non"
    },
    {
      id: 4,
      name: "Couché",
      status: "oui"
    },
    {
      id: 5,
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

  getAppareilById(id: number) {
    const appareil = this.appareils.find(s => {
      return s.id === id;
    });
    return appareil;
  }
}
