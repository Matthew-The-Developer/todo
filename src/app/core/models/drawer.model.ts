interface Drawer {
  visible: boolean;
  mode: DrawerMode;
}

enum DrawerMode {
  Over = 'over',
  Push = 'push',
  Side = 'side'
}

export { Drawer, DrawerMode };