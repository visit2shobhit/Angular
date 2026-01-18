import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientprojectComponent } from './components/clientproject/clientproject.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'employee',
                component: EmployeeComponent,
                canActivate: [authGuard]

            },
            {
                path: 'client',
                component: ClientComponent,
                canActivate: [authGuard]

            },
            {
                path: 'client-project',
                component: ClientprojectComponent,
                canActivate: [authGuard]
            },
            {
                path: 'home',
                component: MasterComponent,
                canActivate: [authGuard]

            }
        ]
    }

];
