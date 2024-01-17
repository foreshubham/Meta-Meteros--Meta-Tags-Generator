import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-meta-one',
  templateUrl: './meta-one.component.html',
  styleUrls: ['./meta-one.component.css']
})
export class MetaOneComponent {
  websiteForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.websiteForm = this.fb.group({
      websiteUrl: ['', [Validators.required, Validators.pattern('(http|https)://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?')]]
    });
  }

  generateMetaTags(): void {
    // Check if the form is valid
    if (this.websiteForm.valid) {
      this.router.navigate(['details'])
    } else {
      // Display an error or prevent further action
    }
  }
}
