import { LayoutTopbarComponent } from './layout-topbar/layout-topbar.component';
import { Component, OnInit, Renderer2, OnDestroy, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LayoutService } from './service/layout.service';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { ProfileService } from '../services/profile/profile.service';
import { ActivationGuardService } from '../shared/services/activation.guard.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {
  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;
  loading: boolean = true;

  profileMenuOutsideClickListener: any;

  @ViewChild(LayoutSidebarComponent) appSidebar!: LayoutSidebarComponent;

  @ViewChild(LayoutTopbarComponent) appTopbar!: LayoutTopbarComponent;

  constructor(public layoutService: LayoutService, public renderer: Renderer2, public router: Router, public profile: ProfileService) {
      this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
          if (!this.menuOutsideClickListener) {
              this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                  const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target)
                      || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));

                  if (isOutsideClicked) {
                      this.hideMenu();
                  }
              });
          }

          if (!this.profileMenuOutsideClickListener) {
              this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                  const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target)
                      || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));

                  if (isOutsideClicked) {
                      this.hideProfileMenu();
                  }
              });
          }

          if (this.layoutService.state.staticMenuMobileActive) {
              this.blockBodyScroll();
          }
      });

      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => {
              this.hideMenu();
              this.hideProfileMenu();
          });

      this.profile.fetch().then(res=>{
        this.loading = false;
        this.profile.isActivated.subscribe((isActivated: boolean)=>{
          if(!isActivated)
            router.navigate(["profile"]);
        });
      });

  }

  hideMenu() {
      this.layoutService.state.overlayMenuActive = false;
      this.layoutService.state.staticMenuMobileActive = false;
      this.layoutService.state.menuHoverActive = false;
      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
          this.menuOutsideClickListener = null;
      }
      this.unblockBodyScroll();
  }

  hideProfileMenu() {
      this.layoutService.state.profileSidebarVisible = false;
      if (this.profileMenuOutsideClickListener) {
          this.profileMenuOutsideClickListener();
          this.profileMenuOutsideClickListener = null;
      }
  }

  blockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.add('blocked-scroll');
      }
      else {
          document.body.className += ' blocked-scroll';
      }
  }

  unblockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.remove('blocked-scroll');
      }
      else {
          document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
              'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
  }

  get containerClass() {
    return {
          'layout-theme-light': this.layoutService.config.colorScheme === 'light',
          'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
          'layout-overlay': this.layoutService.config.menuMode === 'overlay',
          'layout-static': this.layoutService.config.menuMode === 'static',
          'layout-static-inactive': !this.profile.isActivated.value? true : (this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static'),
          'layout-overlay-active': this.layoutService.state.overlayMenuActive,
          'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
          'p-input-filled': this.layoutService.config.inputStyle === 'filled',
          'p-ripple-disabled': !this.layoutService.config.ripple
      }
  }

  ngOnDestroy() {
      if (this.overlayMenuOpenSubscription) {
          this.overlayMenuOpenSubscription.unsubscribe();
      }

      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
      }
  }

}
