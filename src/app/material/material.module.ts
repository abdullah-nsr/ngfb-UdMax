import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepickerToggle } from '@angular/material/datepicker/datepicker-toggle'
import { MatNativeDateModule } from '@angular/material/core';


const Material = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
