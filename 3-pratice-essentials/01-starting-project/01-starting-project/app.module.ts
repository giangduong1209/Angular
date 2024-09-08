import { NgModule } from '@angular/core';
import { HeaderComponent } from './src/app/header/header.component';
import { UserInputComponent } from './src/app/user-input/user-input.component';
import { InvestmentResultsComponent } from './src/app/investment-results/investment-results.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './src/app/user-input/user-input.module';

@NgModule({
  declarations: [HeaderComponent, AppComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
