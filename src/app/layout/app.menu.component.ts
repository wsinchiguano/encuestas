import { OnInit, inject } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    private authService = inject(AuthService);

    model: any[] = [];

    // de acuerdo al perfil se selecciona los menus, por le momento hay solo dos



    ngOnInit() {
        if (this.authService.usuario.usu_usuario === 'ADMIN') {
            this.model = [
                { separator: true },
                {
                    label: 'Clientes',
                    icon: 'pi pi-users',
                    items: [
                        {
                            label: 'Encuestados',
                            icon: 'pi pi-check',
                            routerLink: ['/encuestas/encuestados'],
                        },
                        {
                            label: 'Administrar grupo encuesta',
                            icon: 'pi pi-check',
                            routerLink: ['/encuestas/adm-grupo'],
                        },
                        {
                            label: 'Crear encuestas',
                            icon: 'pi pi-check',
                            routerLink: ['/encuestas/encuesta'],
                        },
                        {
                            label: 'Cargos',
                            icon: 'pi pi-check',
                            routerLink: ['/encuestas/cargos'],
                        },
                       
                    ],
                },
            ];
        } else {
            this.model = [
                { separator: true },
                {
                    label: 'Clientes',
                    icon: 'pi pi-users',
                    items: [
            
                        {
                            label: 'Ingresar Encuesta',
                            icon: 'pi pi-check',
                            routerLink: ['/encuestas/ingresar-encuesta'],
                        },
                    ],
                },
            ];
        }
       
    }
}
