import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateBadgeCounterService {

  private subject = new Subject<number>();

  constructor() { }

  SendBadgeCounter(_badgeCounter: number) {
    this.subject.next(_badgeCounter);
  }

  ReceiveBadgeCounter(): Observable<number> {
    return this.subject.asObservable();
  }



}
