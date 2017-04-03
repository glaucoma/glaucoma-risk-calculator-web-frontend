import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GaugeModule } from 'ng2-kw-gauge';
import { CollapseModule } from 'ng2-bootstrap';
import { RiskStatsService } from '../api/risk_stats/risk-stats.service';
import { RiskQuizFormComponent } from './risk-quiz-form.component';
import { RiskQuizFormSubmittedComponent } from '../risk-quiz-form-submitted/risk-quiz-form-submitted.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, GaugeModule, CollapseModule.forRoot()
  ],
  providers: [RiskStatsService],
  declarations: [RiskQuizFormComponent, RiskQuizFormSubmittedComponent],
  exports: [RiskQuizFormComponent]
})
export class RiskQuizFormModule {
}
