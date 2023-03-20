import { Component, OnInit } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})

export class ImagesgenerationComponent implements OnInit{
  constructor(private imagesgeneration : ImagesgenerationService) { }

  ngOnInit(): void {
  }

  result :string = "";
  UsedPrompt : string  = "";

  postCompletition(){

    var payload = { 
	    prompt: this.UsedPrompt, 
	    n: 1, 
	    size: "256x256"

    }

    this.imagesgeneration.postCompletition(payload)
    .subscribe((data: any) => {
	    //alert(JSON.stringify(data));
	    console.log(data);
      this.result = data.data[0].url;

   });

  }

}
