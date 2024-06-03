import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ThemeComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent, AsideComponent, ThemeComponent],
})
export class CoreModule {}
