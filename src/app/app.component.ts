import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "WHY I LOVE MODJO";
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

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

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onAllumer() {
    console.log("Il maitrise touuuuuut!");
  }
}
