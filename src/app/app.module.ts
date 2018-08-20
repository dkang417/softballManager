import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeammanagerComponent } from './teammanager/teammanager.component';
import { GameComponent } from './teammanager/games/game/game.component';
import { AddplayerComponent } from './teammanager/players/addplayer/addplayer.component';
import { ListplayersComponent } from './teammanager/players/listplayers/listplayers.component';
import { PlayersService } from './teammanager/services/team/players.service';
import { HttpClient } from 'selenium-webdriver/http';
import { TitleizePipe } from './titleize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeammanagerComponent,
    GameComponent,
    AddplayerComponent,
    ListplayersComponent,
    TitleizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
