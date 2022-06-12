import { Injectable } from '@angular/core';
import { Drawer, DrawerMode } from '@models/drawer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  leftDrawer: Drawer;

  constructor() {
    this.leftDrawer = { visible: false, mode: DrawerMode.Side };
  }

  toggleDrawer(drawer: Drawer): void {
    drawer.visible = !drawer.visible;
  }
}
