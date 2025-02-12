import { Component } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { GridsectionComponent } from '@app/shared/ui/gridsection/gridsection.component';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { VideoBackground } from '@app/shared/ui/video-background/video-background.component';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-eventspage',
  standalone: true,
  imports: [PageWrapperComponent, HeroComponent, ButtonComponent, GridsectionComponent, VideoBackground],
  templateUrl: './events.page.html',
  styleUrl: './events.page.css'
})

export class EventsPage {
  content = [{name:'kakais'}]
  src:string;
  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    this.src = this.graphicsLoaderService.getGraphic('eventsvideo')
  }
}
