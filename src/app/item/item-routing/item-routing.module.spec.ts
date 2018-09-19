import { ItemRoutingModule } from './item-routing.module';

describe('ItemRoutingModule', () => {
  let itemRoutingModule: ItemRoutingModule;

  beforeEach(() => {
    itemRoutingModule = new ItemRoutingModule();
  });

  it('should create an instance', () => {
    expect(itemRoutingModule).toBeTruthy();
  });
});
