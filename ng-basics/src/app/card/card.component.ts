import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  title: string = 'My Card title';
  text: string = 'My sample text';
  textColor: string = ''

  ngOnInit() {
  }
  changeTitle():void {
    this.title = 'Title has been changed';
  }
}
