import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {

  appCopyright;

  constructor() {
    this.appCopyright = '2017 RIESLING CMS. All Rights Reserved.';
  }
}
