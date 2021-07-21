import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  public chipsGroup: FormArray;
  public _chipsParameters: string[];
  @Input() set chipsParameters(value: string[]) {
    this._chipsParameters = value;
  }
  get chipsParameters(): string[] {
    return this._chipsParameters;
  }

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.chipsGroup = this.formBuilder.array([...this.chipsParameters]);
  }

  selectChip(chip: any): void {
    chip.selected = !chip.selected;
  }

  deleteChip(index: number): void {
    this.chipsGroup.removeAt(index);
  }

}
