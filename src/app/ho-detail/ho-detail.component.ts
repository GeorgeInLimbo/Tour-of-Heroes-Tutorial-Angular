import { Component, OnInit } from '@angular/core';
import { Ho } from '../ho';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HoService } from '../ho.service';

@Component({
  selector: 'app-ho-detail',
  templateUrl: './ho-detail.component.html',
  styleUrls: ['./ho-detail.component.scss']
})

export class HoDetailComponent implements OnInit {

  ho: undefined | Ho;

  constructor(
    private route: ActivatedRoute,
    private hoService: HoService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHo();
  }

  getHo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hoService.getHo(id).subscribe(ho => this.ho = ho);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.ho) {
      this.hoService.updateHo(this.ho).subscribe(() => this.goBack());
    }
  }
}