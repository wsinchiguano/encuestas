import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AppSidebarComponent } from './app.sidebar.component';
import { Usuario } from '../auth/interfaces/login.interface';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent implements OnInit {

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;
    user!: Usuario;

    constructor(
        public layoutService: LayoutService, 
        public el: ElementRef, 
        private authService: AuthService,
        private router: Router
        ) { }
    ngOnInit() {
        this.user = this.authService.usuario;
    }
    onLogout() {
        this.router.navigateByUrl('/auth/login');
        this.authService.logout();
       //console.log('usuario: ',this.user);
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
