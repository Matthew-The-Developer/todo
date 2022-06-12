import { Component } from '@angular/core';
import { globals } from '@globals';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = globals.title;

  constructor(
    public app: AppService
  ) { }
}
