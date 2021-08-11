import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-grade',
  templateUrl: './skill-grade.component.html',
  styleUrls: ['./skill-grade.component.scss']
})
export class SkillGradeComponent {
  public value = 0;
  @Input() set skillGradeValue(value: number) {
    this.value = value;
  }

  get skillGradeValue(): number{
    return this.value;
  }
}
