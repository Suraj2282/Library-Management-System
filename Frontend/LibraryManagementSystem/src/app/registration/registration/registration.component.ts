import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../services/registration-service.service';


@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

      registerForm:FormGroup | undefined;

      constructor(
        private snackbar:MatSnackBar,
        private fb:FormBuilder,
        private router:Router,
        private service:RegistrationServiceService
      )
      {

      }

      ngOnInit()
      {
        this.registerForm = this.fb.group({
          email:['', Validators.required, Validators.email],
          name:['',Validators.required],
          mobile:['', Validators.required],
          profession:['', Validators.required],
          password:['', Validators.required]
        })
      }
      register()
      {
        // console.log(this.registerForm.value);
        this.service.register(this.registerForm.value).subscribe((response)=>
        {
          // console.log(response);
          if(response!=null)
          {
            this.snackbar.open("User Registration Successfull!!!!", "Close", {duration:5000});
            this.registerForm.reset;
            this.router.navigateByUrl('/login');
          }
          else
          {
            this.snackbar.open("User Already Exist", "Close", {duration:5000});
            this.registerForm.reset;
            this.router.navigateByUrl('/login');

          }
        
        }
        )
      }

}
