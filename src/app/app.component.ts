import { Component } from '@angular/core';
import { FeachdataService } from './feachdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products:any;
  constructor(private fs:FeachdataService){
    this.fs.getdata().subscribe((data)=>{
      this.products=data;
      console.log(this.products);
    })
  }
  fun(e:any)
  {
    console.log(e.target.textcontent);
    this.fs.getcategorydata(e.target.textContent).subscribe((data)=>this.products=data);
  }
}
