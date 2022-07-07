import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./css/style.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder , private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  submit() {
    // console.log(this.form.value);
    this.http.post('http://localhost:8000/api/register', this.form.value).subscribe(
      (data:any) => {
        console.log(data);
      });
  }

}
