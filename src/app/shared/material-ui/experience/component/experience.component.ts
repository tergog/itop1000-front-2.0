import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExperienceModalComponent } from './add-experience-modal/add-experience-modal.component';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experienceGroup: FormArray;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.experienceGroup = this.formBuilder.array([]);
  }

  ngOnInit(): void {
  }

  openAddExperienceModal(): void {
    this.dialog.open(AddExperienceModalComponent).afterClosed().subscribe(exp => {
      if (exp) {
        console.log(exp);
        (this.experienceGroup as FormArray).push(exp);
      }
    });
  }

}
