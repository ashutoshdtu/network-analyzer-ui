import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = environment.appTitle;
  logo: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.addSvgIcons();
  }

  ngOnInit() {
  }

  addSvgIcons() {
    this.logo = environment.logoLightIcon;

    this.matIconRegistry.addSvgIcon(
      environment.logoLightIcon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        environment.imagesFolderPath + '/' + environment.logoLightFile
      )
    );

    this.matIconRegistry.addSvgIcon(
      environment.logoDarkIcon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        environment.imagesFolderPath + '/' + environment.logoDarkFile
      )
    );

    this.matIconRegistry.addSvgIcon(
      environment.logoColorIcon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        environment.imagesFolderPath + '/' + environment.logoColorFile
      )
    );
  }
}
