import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, HomeComponent, PageNotFoundComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class SiteFrameworkModule { }
