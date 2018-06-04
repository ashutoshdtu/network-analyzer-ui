import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  isDarkTheme = false;
  disabled = false;
  themes = {
    light: 'app-light-theme',
    dark:  'app-dark-theme'
  };

  constructor() { }

  ngOnInit() {
  }

  onSlideChange(event) {
    const bodyClass = document.querySelector('body').classList;
    console.log('event', event, 'isDarkTheme', this.isDarkTheme);

    if (event.checked) {
      bodyClass.remove(this.themes.light);
      bodyClass.add(this.themes.dark);
    } else {
      bodyClass.remove(this.themes.dark);
      bodyClass.add(this.themes.light);
    }
    return null;
  }

}
