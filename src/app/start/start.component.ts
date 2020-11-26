import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  public n1 = false;
  public n2 = false;
  public n3 = false;
  public n4 = false;
  public n5 = false;
  public n6 = false;
  public n7 = false;
  public n8 = false;
  public n9 = false;
  public v1 = '';
  public v2 = '';
  public v3 = '';
  public v4 = '';
  public v5 = '';
  public v6 = '';
  public v7 = '';
  public v8 = '';
  public v9 = '';
  public turn = 'X';
  public n = true;
  public i = 0;
  public x = 0;
  public o = 0;
  public player1;
  public player2;
  constructor(private play: PlayerService, private router: Router) { }

  ngOnInit(): void {
    if(this.play.player1==null)
    {
      this.router.navigate(['/home']);
    }
    this.player1=this.play.player1;
    this.player2=this.play.player2;
  }
  submit1(): void
  {
    this.n1 = true;
    this.v1 = this.turn;
    if ( (this.v2 === this.v1 && this.v3 === this.v1) || (this.v4 === this.v1 && this.v7 === this.v1) || (this.v5 === this.v1 && this.v9 === this.v1))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  submit2(): void
  {
    this.n2 = true;
    this.v2 = this.turn;
    if ( (this.v2 === this.v1 && this.v3 === this.v2) || (this.v5 === this.v2 && this.v8 === this.v2))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  submit3(): void
  {
    this.n3 = true;
    this.v3 = this.turn;
    if ( (this.v2 === this.v3 && this.v3 === this.v1) || (this.v6 === this.v3 && this.v9 === this.v3) || (this.v5 === this.v5 && this.v7 === this.v3))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  submit4(): void
  {
    this.n4 = true;
    this.v4 = this.turn;
    if ( (this.v4 === this.v1 && this.v7 === this.v4) || (this.v4 === this.v5 && this.v6 === this.v4))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  submit5(): void
  {
    this.n5 = true;
    this.v5 = this.turn;
    if ( (this.v1 === this.v5 && this.v9 === this.v5) || (this.v5 === this.v3 && this.v5 === this.v7) || (this.v5 === this.v2 && this.v5 === this.v8) || (this.v5 === this.v4 && this.v5 === this.v6))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  submit6(): void
  {
    this.n6 = true;
    this.v6 = this.turn;
    if ( (this.v6 === this.v3 && this.v3 === this.v9) || (this.v6 === this.v5 && this.v6 === this.v4))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  submit7(): void
  {
    this.n7 = true;
    this.v7 = this.turn;
    if ( (this.v7 === this.v1 && this.v7 === this.v4) || (this.v7 === this.v8 && this.v7 === this.v9) || (this.v5 === this.v7 && this.v7 === this.v3))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  submit8(): void
  {
    this.n8 = true;
    this.v8 = this.turn;
    if ( (this.v2 === this.v8 && this.v8 === this.v5) || (this.v8 === this.v7 && this.v8 === this.v9))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  submit9(): void
  {
    this.n9 = true;
    this.v9 = this.turn;
    if ( (this.v9 === this.v1 && this.v9 === this.v5) || (this.v9 === this.v3 && this.v9 === this.v6) || (this.v9 === this.v8 && this.v9 === this.v7))
    {
      if (this.turn === 'X')
      {
        this.x = this.x + 1;
      }
      else
      {
        this.o = this.o + 1;
      }
      this.restart();
    }
    else
    {
      this.turn = this.getnext();
      this.n = !this.n;
      this.i = this.i + 1;
    }
    if ( this.i === 9)
    {
      this.restart();
    }
  }
  restart(): void{
    this.v1 = '';
    this.v2 = '';
    this.v3 = '';
    this.v4 = '';
    this.v5 = '';
    this.v6 = '';
    this.v7 = '';
    this.v8 = '';
    this.v9 = '';
    this.n1 = false;
    this.n2 = false;
    this.n3 = false;
    this.n4 = false;
    this.n5 = false;
    this.n6 = false;
    this.n7 = false;
    this.n8 = false;
    this.n9 = false;
    this.turn = 'X';
    this.n = true;
    this.i = 0;
  }

  getnext(): any
  {
    return this.n ? 'O' : 'X';
  }

}
