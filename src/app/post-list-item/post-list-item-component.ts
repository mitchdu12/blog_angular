import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item-component.html',
  styleUrls: ['./post-list-item-component.scss']
})

export class PostListItemComponent implements OnInit {


  @Input() loveIts: number;
  @Input() dontloveIts: number;
  @Input() postTitle: String;
  @Input() postContent: string;
  @Input() created_at: Date;

  constructor() {
    this.loveIts = 0;
    this.dontloveIts = 0;
  }

  ngOnInit() {
  }


  onLoveIt() {
    this.loveIts++;
    return true;
  }
  onDontLoveIt() {
    this.dontloveIts++;
    return true;
  }

  PostAime() {
    return (this.loveIts > this.dontloveIts);
  }
  PostPasAime() {
    return (this.loveIts < this.dontloveIts);
  }


}
