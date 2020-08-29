import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderPromotionComponent } from './components/header-promotion/header-promotion.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductComponent } from './components/pages/product/product.component';
import { SearchComponent } from './components/pages/search/search.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { HomeBannerComponent } from './components/pages/home/home-banner/home-banner.component';
import { HomeFeaturesComponent } from './components/pages/home/home-features/home-features.component';
import { HomePromotionsComponent } from './components/pages/home/home-promotions/home-promotions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPromotionComponent,
    HeaderMobileComponent,
    NewsletterComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent,
    Error404Component,
    HomeBannerComponent,
    HomeFeaturesComponent,
    HomePromotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
