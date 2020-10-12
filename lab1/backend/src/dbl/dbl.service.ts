import { Inject, Injectable } from '@nestjs/common';
import { QUESTIONS_REPOSITORY, TOPICS_REPOSITORY } from '../core/providers/providers.const';
import { ITopicsRepository } from '../core/interfaces/topics/repositories';
import { IQuestionsRepository } from '../core/interfaces/questions/repositories';

@Injectable()
export class DBLService {
    constructor(
      @Inject(TOPICS_REPOSITORY)
      private readonly topicsRepository: ITopicsRepository,
      @Inject(QUESTIONS_REPOSITORY)
      private readonly questionsRepository: IQuestionsRepository,
    ) {}
}
