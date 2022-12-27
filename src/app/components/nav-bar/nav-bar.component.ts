import { Component, OnInit } from '@angular/core';
import { UpdateBadgeCounterService } from 'src/app/services/update-badge-counter.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  _badgeCounter: number = 0;

  constructor(private _badgeService: UpdateBadgeCounterService) { }

  ngOnInit(): void {

    this._badgeService.ReceiveBadgeCounter().subscribe(data => {
      this._badgeCounter = data;
    });
  }


}
