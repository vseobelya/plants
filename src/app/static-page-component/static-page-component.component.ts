import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Settings } from '../settings';
import { StaticPageService } from '../static-page.service';

@Component({
  selector: 'plants-static-page-component',
  templateUrl: './static-page-component.component.html',
  styleUrls: ['./static-page-component.component.css']
})
export class StaticPageComponentComponent implements OnInit {
  @ViewChild('output') private output!: ElementRef;

  constructor(private sps: StaticPageService,
              private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit(): void {
     const fn: string = this.route.snapshot.data.fileName;
     this.sps.getPage(fn).subscribe((content: string) => {
       this.output.nativeElement.innerHTML = content;
     });
     this.title.setTitle(this.route.snapshot.data.title + ' :: ' + Settings.title);
  }

}
