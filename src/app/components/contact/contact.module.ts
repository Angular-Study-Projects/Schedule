import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule, NzGridModule, NzIconModule } from 'ng-zorro-antd';


@NgModule({
    imports: [
        CommonModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzButtonModule,
        NzGridModule,
        NzIconModule
    ],
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent
    ]
})

export class ContactModule {}