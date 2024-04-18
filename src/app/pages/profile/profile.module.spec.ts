import { TestBed } from '@angular/core/testing';
import { ProfileModule } from './profile.module';

describe('ProfileModule', () => {
  let pipe: ProfileModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProfileModule] });
    pipe = TestBed.inject(ProfileModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
