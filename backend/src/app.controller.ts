import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DefaultGenerics, StreamChat } from "stream-chat";

@Controller()
export class AppController {

  chatClient: StreamChat<DefaultGenerics>;

  constructor(private readonly appService: AppService) {

    this.chatClient = StreamChat.getInstance(
      '49ermmxb58rx',
      'kkgwqw2w9kh9rjj777puf8fbn6a4qsq2k2g5e7dp3kngupfexvh8ew58fyrp4upm',
    );
  }

  @Get()
  async createChannel(): Promise<any> {
    const timestamp = new Date().getTime();
    const channel = this.chatClient.channel(
      'messaging',
      `channel${timestamp}`,
      {
        name: `channel${timestamp}`,
        members: ['still-mouse-6'],
        created_by_id: 'still-mouse-6',
      },
    );

    await channel.create();
    await channel.sendMessage({
      user_id: 'still-mouse-6',
      text: 'message',
    });
  }
}
