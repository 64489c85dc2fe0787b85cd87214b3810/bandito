export class TabsContext {
  activeId = $state('');
  lineWidth = $state(0);
  lineLeft = $state();

  constructor(activeId: string = '') {
    this.activeId = activeId;
  }
}
