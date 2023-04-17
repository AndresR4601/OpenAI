import { Component, OnInit } from '@angular/core';
import { Textdavinciedit001Service } from '../services/textdavinciedit001.service';

@Component({
  selector: 'app-textdavinciedit001',
  templateUrl: './textdavinciedit001.component.html',
  styleUrls: ['./textdavinciedit001.component.css']
})
export class Textdavinciedit001Component implements OnInit{
  constructor(private textdavinciedit001 : Textdavinciedit001Service) {}

  ngOnInit(): void {
  }

  result: string = "";
  input: string = "";

  postCompletition() {
      var payload = {
        model: "text-davinci-edit-001",
        input: this.input,
        instruction: "Fix spelling"
      }

      this.textdavinciedit001.postCompletition(payload)
      .subscribe((data: any) => {
        //alert(JSON.stringify(data));
        console.log(data);
        this.result = data.choices[0].text;
      });
  }
}
