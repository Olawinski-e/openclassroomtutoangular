import { Injectable } from "@angular/core";
import { tick } from "@angular/core/src/render3";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppareilService {
  appareilsSubject = new Subject<any[]>();
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

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  constructor() {}

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = "oui";
    }
    this.emitAppareilSubject();
  }
  swithOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = "non";
      this.emitAppareilSubject();
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = "oui";
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = "non";
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(s => {
      return s.id === id;
    });
    return appareil;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: "",
      status: ""
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}
