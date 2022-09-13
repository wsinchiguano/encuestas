import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AppSidebarComponent } from './app.sidebar.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent implements OnInit {

    notificationMenuItems: MenuItem[] = [];

    userMenuItems: MenuItem[] = [];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

    constructor(public layoutService: LayoutService, public el: ElementRef) { }

    ngOnInit(): void {
        this.notificationMenuItems = [
            {
                icon: 'pi pi-shopping-cart',
                label: `<div class="ml-2">
                            <span class="font-semibold">New Order</span>
                            <p class="text-color-secondary">You have <strong>3</strong> new orders.</p>
                        </div>`,
                escape: false
            },
            {
                icon: 'pi pi-check-square',
                label: `<div class="ml-2">
                            <span class="font-semibold">Withdrawn Completed</span>
                            <p class="text-color-secondary">Funds are on their way.</p>
                        </div>`,
                escape: false
            },
            {
                icon: 'pi pi-chart-line',
                label: `<div class="ml-2">
                            <span class="font-semibold">Monthly Reports</span>
                            <p class="text-color-secondary">Monthly Reports are ready.</p>
                        </div>`,
                escape: false
            },
            {
                icon: 'pi pi-comments',
                label: `<div class="ml-2">
                            <span class="font-semibold">Comments</span>
                            <p class="text-color-secondary"><strong>2</strong> new comments.</p>
                        </div>`,
                escape: false
            },
            {
                icon: 'pi pi-exclamation-circle',
                label: `<div class="ml-2">
                            <span class="font-semibold">Chargeback Request</span>
                            <p class="text-color-secondary"><strong>1</strong> to review.</p>
                        </div>`,
                escape: false
            }
        ];

        this.userMenuItems = [
            {
                icon: 'pi pi-user',
                label: 'Profile',
                styleClass: 'border-round overflow-hidden'
            },
            {
                icon: 'pi pi-cog',
                label: 'Settings',
                styleClass: 'border-round overflow-hidden'
            },
            {
                icon: 'pi pi-calendar',
                label: 'Calendar',
                styleClass: 'border-round overflow-hidden'
            },
            {
                icon: 'pi pi-inbox',
                label: 'Inbox',
                styleClass: 'border-round overflow-hidden'
            },
            {
                icon: 'pi pi-power-off',
                label: 'Logout',
                styleClass: 'border-round overflow-hidden'
            }
        ];
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onProfileButtonClick() {
        this.layoutService.showRightMenu();
    }

    onNotificationMenuClick() {
        this.layoutService.showNotificationMenu();
    }

    onSearchClick() {
        this.layoutService.toggleSearchBar();
    }

    onUserMenuButtonClick() {
        this.layoutService.showUserMenu();
    }

    onRightMenuClick() {
        this.layoutService.showRightMenu();
    }

    get logo() {
        const logo = this.layoutService.config.menuTheme === 'white' || this.layoutService.config.menuTheme === 'orange' ? 'dark' : 'white';
        return logo;
    }

    get userMenuVisible(): boolean {
        return this.layoutService.state.userMenuVisible;
    }

    get notificationMenuVisible(): boolean {
        return this.layoutService.state.notificationMenuVisible;
    }

}