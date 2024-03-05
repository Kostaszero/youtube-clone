import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtVideoCardComponent } from './yt-video-card.component';

describe('YtVideoCardComponent', () => {
  let component: YtVideoCardComponent;
  let fixture: ComponentFixture<YtVideoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YtVideoCardComponent]
    });
    fixture = TestBed.createComponent(YtVideoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
