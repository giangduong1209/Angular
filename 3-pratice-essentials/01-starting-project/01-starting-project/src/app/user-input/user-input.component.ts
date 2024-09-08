import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExceptedReturn = '5';
  // enteredDuration = '10';
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExceptedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment,
    //   duration: +this.enteredDuration,
    //   expectedReturn: +this.enteredExceptedReturn,
    //   annualInvestment: +this.enteredAnnualInvestment,
    // });

    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExceptedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });

    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExceptedReturn(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    // });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExceptedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
