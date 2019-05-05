import { Component, OnInit, Input } from "@angular/core";
import { AppareilService } from "../services/appareil.service";

@Component({
  selector: "app-appareil",
  templateUrl: "./appareil.component.html",
  styleUrls: ["./appareil.component.scss"]
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === "oui") {
      return "green";
    } else if (this.appareilStatus === "non") {
      return "red";
    }
  }

  onSwitch() {
    if (this.appareilStatus === "oui") {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === "non") {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
