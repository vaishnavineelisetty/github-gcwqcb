import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AccountService, AlertService } from "../services";
import { SevicingService } from "../sevicing.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.less"]
})
export class SignupComponent implements OnInit {
  public Reg: boolean[] = [false, false, false];
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private Ser: SevicingService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  Sign(n: number) {
    for (let i = 0; i < this.Reg.length; i++) this.Reg[i] = false;
    this.Reg[n] = true;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success("Registration successful", {
            keepAfterRouteChange: true
          });
          this.router.navigate(["../login"], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
