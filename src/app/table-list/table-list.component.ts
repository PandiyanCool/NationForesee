import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styles: [`
  iframe {
    width: 100%
  }
  `]
})
export class TableListComponent implements OnInit {

  iframeData: SafeHtml;
  current_url: any;
  URL = 'https://visualize.data.gov.in/?inst=364aaef4-1b5b-4cf6-8b21-e2515d0e772b&vid=39781&embed=1';
  private html = '<iframe src=\"https://visualize.data.gov.in/?inst=364aaef4-1b5b-4cf6-8b21-e2515d0e772b&vid=39781&embed=1\"></iframe>';
  constructor(private sanitizer: DomSanitizer) {
    this.iframeData = this.sanitizer.bypassSecurityTrustHtml(this.html);
  }

  ngOnInit() {

  }

}
