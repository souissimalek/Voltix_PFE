import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by ♥ <b><a target="_blank">Malèk Souissi ♥ Sarra Mansour </a></b> 2022
    </span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/sfmtechnologies" target="_blank" class="ion ion-social-facebook"></a>
      <a href="http://www.sfmtelecom.com/" target="_blank" class="ion ion-social-google"></a>
      <a href="https://www.linkedin.com/company/sfm-telecom-sfm-technologies/about/https://www.linkedin.com/company/sfm-telecom-sfm-technologies/about/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
