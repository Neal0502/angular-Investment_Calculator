import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
  //results = this.investmentService.resultData.asReadonly();
}
