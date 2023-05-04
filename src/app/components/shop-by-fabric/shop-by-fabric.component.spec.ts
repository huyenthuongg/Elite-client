import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByFabricComponent } from './shop-by-fabric.component';

describe('ShopByFabricComponent', () => {
  let component: ShopByFabricComponent;
  let fixture: ComponentFixture<ShopByFabricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopByFabricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
