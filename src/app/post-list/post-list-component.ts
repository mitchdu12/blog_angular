import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      loveIts: 0,
      created_at: Date()
      },
     {
      title: 'Un autre post',
      content: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      loveIts: 0,
      created_at: Date()
    }
  ];


  constructor() {}
  ngOnInit() {
  }


}

