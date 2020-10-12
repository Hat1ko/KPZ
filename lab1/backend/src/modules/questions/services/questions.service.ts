import { Inject, Injectable } from '@nestjs/common'
import { IQuestionsService } from '../../../core/interfaces/questions/services'
import { DBLService } from '../../../dbl'
import { IQuestionCreate } from '../../../core/interfaces/questions/dtos'
import { IQuestion } from '../../../core/interfaces/questions/entities'
import { ITopicsService } from '../../../core/interfaces/topics/services'
import { TOPICS_SERVICE } from '../../../core/providers/providers.const';

@Injectable()
export class QuestionsService implements IQuestionsService {
  constructor(
    private readonly dbl: DBLService,
    @Inject(TOPICS_SERVICE)
    private readonly topicsService: ITopicsService,
  ) {}

  async create(dto: IQuestionCreate): Promise<IQuestion> {
    const topic = await this.topicsService.getByName(dto.topicName)
    const question = await this.dbl.questionsRepository.create({ ...dto, topicId: topic.id })
    return await question.save()
  }

  async getAll(): Promise<IQuestion[]> {
    return await this.dbl.questionsRepository.find()
  }

  async getOne(id: string): Promise<IQuestion> {
    return await this.dbl.questionsRepository.findOneOrError({ id })
  }
}
