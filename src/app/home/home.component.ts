import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  player1="";
  player2="";
  constructor(private router: Router, private play: PlayerService) { }

  ngOnInit(): void {
  }

  submit()
  {
    this.play.player1=this.player1;
    this.play.player2=this.player2;
    this.router.navigate(['/start']);
  }

}
