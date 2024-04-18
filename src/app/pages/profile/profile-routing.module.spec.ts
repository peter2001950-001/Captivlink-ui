import { TestBed } from '@angular/core/testing';
import { ProfileRoutingModule } from './profile-routing.module';

describe('ProfileRoutingModule', () => {
  let pipe: ProfileRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProfileRoutingModule] });
    pipe = TestBed.inject(ProfileRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
