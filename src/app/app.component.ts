import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
// import "rxjs/add/observable/interval";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "WHY I LOVE MODJO";

  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      value => {
        this.secondes = value;
      },
      error => {
        console.log("error :" + error);
      },
      () => {
        console.log("observable complete");
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.counterSubscription.unsubscribe();
  }
}
