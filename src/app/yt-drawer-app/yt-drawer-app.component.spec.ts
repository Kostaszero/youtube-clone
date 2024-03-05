import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtDrawerAppComponent } from './yt-drawer-app.component';

describe('YtDrawerAppComponent', () => {
  let component: YtDrawerAppComponent;
  let fixture: ComponentFixture<YtDrawerAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YtDrawerAppComponent]
    });
    fixture = TestBed.createComponent(YtDrawerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
