import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestoreComponent } from './restore/restore.component';
import {ErrorComponent} from "./error/error.component";




@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        RestoreComponent,
        ErrorComponent
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AccessModule { }
