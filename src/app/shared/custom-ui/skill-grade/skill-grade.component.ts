import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-grade',
  templateUrl: './skill-grade.component.html',
  styleUrls: ['./skill-grade.component.scss']
})
export class SkillGradeComponent implements OnInit {
  public _value = 0;
  @Input() set skillGradeValue(value: number) {
    this._value = value;
  }

  get skillGradeValue(): number{
    return this._value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
