import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  public chipsElements = ['React', 'JS', 'Figma', 'Python Numpy FastAI', 'Python Numpy FastAI', 'Web','React', 'JS', 'Figma', 'Python Numpy FastAI', 'Python Numpy FastAI', 'Web'];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectChip(chip: any): void {
    chip.selected = !chip.selected;
  }

}
