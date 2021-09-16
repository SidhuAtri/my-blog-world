import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-blogs-by-date',
  templateUrl: './view-all-blogs-by-date.component.html',
  styleUrls: ['./view-all-blogs-by-date.component.css']
})
export class ViewAllBlogsByDateComponent implements OnInit {

  searchDate = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.searchDate = data.date;
    })
  }

}
