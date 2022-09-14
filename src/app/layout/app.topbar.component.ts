import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AppSidebarComponent } from './app.sidebar.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent implements OnInit {

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

    constructor(public layoutService: LayoutService, public el: ElementRef) { }

    ngOnInit(): void {
        /*
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
        ];*/
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onProfileButtonClick() {
        this.layoutService.showRightMenu();
    }

    onSearchClick() {
        this.layoutService.toggleSearchBar();
    }

    onRightMenuClick() {
        this.layoutService.showRightMenu();
    }

    get logo() {
        const logo = this.layoutService.config.menuTheme === 'white' || this.layoutService.config.menuTheme === 'orange' ? 'dark' : 'white';
        return logo;
    }

}