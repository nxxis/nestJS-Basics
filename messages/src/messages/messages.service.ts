import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './mesages.repository';

@Injectable()
export class MessagesService {
  //   messgesRepo: MessagesRepository;

  //   constructor(messageRepo: MessagesRepository) {
  //     this.messgesRepo = messageRepo;
  //   }

  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
