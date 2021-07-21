import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  public chipsGroup: FormArray;
  public _chipsValues: string[];
  @Input() set chipsValues(value: string[]) {
    this._chipsValues = value;
  }

  get chipsValues(): string[] {
    return this._chipsValues;
  }

  public chipsComponentParameters = {
    buttons: {
      close: {
        text: '',
        type: '',
        view: 'close-small',
        disabled: false
      }
    }
  };

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.chipsGroup = this.formBuilder.array([...this.chipsValues]);
  }

  selectChip(chip: any): void {
    chip.selected = !chip.selected;
  }

  deleteChip(index: number): void {
    this.chipsGroup.removeAt(index);
  }

}
