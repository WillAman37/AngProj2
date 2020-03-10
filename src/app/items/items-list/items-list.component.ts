import { Component, OnInit } from '@angular/core';
import { Parts } from '../items.model';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  Part_: Parts[] = [
    new Parts('P02463-B21', 'This is simply a test', 
    'https://www.lenovo.com/medias/lenovo-data-center-rack-server-thinksystem-sr570-subseries-hero.png?context=bWFzdGVyfHJvb3R8NDc3NjJ8aW1hZ2UvcG5nfGg0Ni9oNWYvOTU4NjA5MTg1MTgwNi5wbmd8MmRiOWNmZDBmZGNiMzM1OTdlMTI4NWU5N2I4N2Y4ZDQxNTk4OTg5ZTVhMmYwZmE4NDdkZmY2NGYwNzQxYzllNw',
    '$3000'
    ),
    new Parts('P02463-B21', 'This is simply a test 2', 
    'https://www.2ndgear.com/_assets/images/products/9679.jpg?width=500&height=375&scale=canvas',
    '$2000')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
