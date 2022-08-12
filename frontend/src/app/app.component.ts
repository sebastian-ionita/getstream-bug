import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {ChannelService, ChatClientService, StreamI18nService} from "stream-chat-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private httpClient: HttpClient
  ) {
    const apiKey = '49ermmxb58rx';
    const userId = 'still-mouse-6';
    const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3RpbGwtbW91c2UtNiJ9.1JFtaNdF5ztRoRTFvrKxRnWJ_pAIzmPzmiQfBhHAgzo';
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular8', {
      // add as many custom fields as you'd like
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Talking about Angular',
    });
    await channel.create();
    this.channelService.init({
      type: 'messaging',
      members: { $in: ['still-mouse-6'] },
    });
  }

  createChannel(): void {
    this.httpClient.get('http://localhost:3000').subscribe(() => {});
  }
}
