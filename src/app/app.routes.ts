import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientprojectComponent } from './components/clientproject/clientproject.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:MasterComponent
    },
    {
        path:'employee',
        component:EmployeeComponent
    },
    {
        path:'client',
        component:ClientComponent
    },
     {
        path:'client-project',
        component:ClientprojectComponent
    }
];
