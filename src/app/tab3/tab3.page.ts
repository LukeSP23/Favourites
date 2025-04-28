import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor() {}

  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    event.detail.complete();
  }

}
