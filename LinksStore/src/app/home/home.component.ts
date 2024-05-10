import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  providers:[Router],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  userName = '';

  constructor(private router: Router){}

  public saveUserName(){
    if(this.userName !== ''){
      localStorage.setItem('userName',this.userName);
      console.log(this.userName);
      this.router.navigate(['/links']);
    }
  }
}
