interface Bar {
  visible: boolean;
  mode: BarMode;
}

enum BarMode {
  Sticky = 'sticky',
  None = 'none',
}

export { Bar, BarMode };