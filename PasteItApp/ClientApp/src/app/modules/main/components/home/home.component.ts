import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public title = "PasteIt";
  public pasteForm: FormGroup;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.pasteForm = this.fb.group({
      code: ["", [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    console.log(this.pasteForm);
  }

  get code() {
    return this.pasteForm.get("code");
  }
}
