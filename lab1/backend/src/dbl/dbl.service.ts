import { Inject, Injectable } from '@nestjs/common';
import { TOPICS_REPOSITORY } from '../core/providers/providers.const';
import { ITopicsRepository } from '../core/interfaces/topics/repositories';

@Injectable()
export class DBLService {
    constructor(
      @Inject(TOPICS_REPOSITORY)
      private readonly topicsRepository: ITopicsRepository,
    ) {}
}
