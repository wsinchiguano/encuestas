import { Component, OnInit } from '@angular/core';
import { AppLayoutComponent } from './app.layout.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[];

    constructor(public appMain: AppLayoutComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Favorites',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'UI Kit',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/uikit'],
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/uikit/formlayout'],
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/uikit/input'],
                    },
                    {
                        label: 'Float Label',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/uikit/floatlabel'],
                    },
                    {
                        label: 'Invalid State',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/uikit/invalidstate'],
                    },
                    {
                        label: 'Button',
                        icon: 'pi pi-fw pi-mobile',
                        routerLink: ['/uikit/button'],
                        class: 'rotated-icon',
                    },
                    {
                        label: 'Table',
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/uikit/table'],
                    },
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/uikit/list'],
                    },
                    {
                        label: 'Tree',
                        icon: 'pi pi-fw pi-share-alt',
                        routerLink: ['/uikit/tree'],
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-fw pi-tablet',
                        routerLink: ['/uikit/panel'],
                    },
                    {
                        label: 'Overlay',
                        icon: 'pi pi-fw pi-clone',
                        routerLink: ['/uikit/overlay'],
                    },
                    {
                        label: 'Media',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/uikit/media'],
                    },
                    {
                        label: 'Menu',
                        icon: 'pi pi-fw pi-bars',
                        routerLink: ['/uikit/menu'],
                        preventExact: true,
                    },
                    {
                        label: 'Message',
                        icon: 'pi pi-fw pi-comment',
                        routerLink: ['/uikit/message'],
                    },
                    {
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/uikit/file'],
                    },
                    {
                        label: 'Chart',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/uikit/charts'],
                    },
                    {
                        label: 'Misc',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/uikit/misc'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'Prime Blocks',
                icon: 'pi pi-fw pi-prime',
                routerLink: ['/blocks'],
                items: [
                    {
                        label: 'Free Blocks',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/blocks'],
                    },
                    {
                        label: 'All Blocks',
                        icon: 'pi pi-fw pi-globe',
                        url: ['https://www.primefaces.org/primeblocks-ng'],
                        target: '_blank',
                    },
                ],
            },
            { separator: true },
            {
                label: 'Utilities',
                icon: 'pi pi-fw pi-compass',
                routerLink: ['/utilities'],
                items: [
                    {
                        label: 'PrimeIcons',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['utilities/icons'],
                    },
                    {
                        label: 'PrimeFlex',
                        icon: 'pi pi-fw pi-desktop',
                        url: ['https://www.primefaces.org/primeflex/'],
                        target: '_blank',
                    },
                ],
            },
            { separator: true },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud'],
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar-plus',
                        routerLink: ['/pages/calendar'],
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline'],
                    },
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        url: 'assets/pages/landing.html',
                        target: '_blank',
                    },
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/login'],
                    },
                    {
                        label: 'Invoice',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/pages/invoice'],
                    },
                    {
                        label: 'Pricing',
                        icon: 'pi pi-fw pi-money-bill',
                        routerLink: ['/pages/pricing'],
                    },
                    {
                        label: 'About Us',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/pages/about'],
                    },
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/pages/help'],
                    },
                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['error'],
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['notfound'],
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['access'],
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty'],
                    },
                    {
                        label: 'FAQ',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/pages/faq'],
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/pages/contact'],
                    },
                    {
                        label: 'Wizard',
                        icon: 'pi pi-fw pi-bolt',
                        routerLink: ['/pages/wizard'],
                    },
                    {
                        label: 'Search Results ',
                        icon: 'pi pi-fw pi-search',
                        routerLink: ['/pages/search-results'],
                    },
                    {
                        label: 'Register',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['/register'],
                    },
                    {
                        label: 'Forgot Password',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/forgotpassword'],
                    },
                    {
                        label: 'New Password',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: ['/newpassword'],
                    },
                    {
                        label: 'Email Verification',
                        icon: 'pi pi-fw pi-envelope',
                        routerLink: ['/emailverification'],
                    },
                    {
                        label: 'Two-Step Verification',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/twostepverification'],
                    },
                    {
                        label: 'Lock Screen',
                        icon: 'pi pi-fw pi-eye-slash',
                        routerLink: ['/lockscreen'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-wallet',
                items: [
                    {
                        label: 'Product Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['ecommerce/productoverview'],
                    },
                    {
                        label: 'Shop',
                        icon: 'pi pi-fw pi-shopping-bag',
                        routerLink: ['ecommerce/shop'],
                    },
                    {
                        label: 'Checkout',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['ecommerce/checkout'],
                    },
                    {
                        label: 'New Product',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['ecommerce/newproduct'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'E-Commerce Admin',
                icon: 'pi pi-fw pi-shield',
                items: [
                    {
                        label: 'Product List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['ecommerce-admin/productlist'],
                    },
                    {
                        label: 'Orders',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['ecommerce-admin/orders'],
                    },
                    {
                        label: 'Order Details',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: ['ecommerce-admin/orderdetails'],
                    },
                    {
                        label: 'Order History',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['ecommerce-admin/orderhistory'],
                    },
                    {
                        label: 'Edit Order',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['ecommerce-admin/editorder'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['profile/create'],
                    },
                    {
                        label: 'Profile List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['profile/profilelist'],
                    },
                    {
                        label: 'Profile Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['profile/overview'],
                    },
                ],
            },
            { separator: true },
            {
                label: 'Hierarchy',
                icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.3',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 2.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            { separator: true },
            {
                label: 'Start',
                icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now',
                        icon: 'pi pi-fw pi-shopping-cart',
                        url: ['https://www.primefaces.org/store'],
                    },
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink: ['/documentation'],
                    },
                ],
            },
        ];
    }
}
