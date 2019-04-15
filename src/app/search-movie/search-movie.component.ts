import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from "@angular/forms";
import { isRequiredValidator } from "../isRequired.validators";
import { rangeDateValidator } from "../rangeDate.validators";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  private displayDiagnostic = false;
  public minimumYear: number = 1900;
  public maximumYear:number = 2019;

  filmForm = this.fb.group({
    FilmIdOrTitle: this.fb.group({
      Identifiant: [""],
      Titre: [""]
    },
      { validators: isRequiredValidator("Titre", "Identifiant") }
    ),
    Type: ["serie"],
    AnneeDeSortie: ["", rangeDateValidator(this.minimumYear, this.maximumYear)],
    Fiche: [""]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filmForm.valueChanges.subscribe(
      value => {
        console.log("filmForm value changes : ", value);
      }
    );
    this.initFiche();

  }

  initFiche() {
    this.filmForm.patchValue({
      Fiche: "courte"
    });

  }

  onSubmit() {
    console.log("filmForm submitted : ", this.filmForm.value);
  }

}

