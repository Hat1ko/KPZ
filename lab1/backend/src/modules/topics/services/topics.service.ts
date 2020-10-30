import { Inject, Injectable } from '@nestjs/common'
import { ITopicsService } from '../../../core/interfaces/topics/services'
import { ITopicCreate } from '../../../core/interfaces/topics/dtos'
import { ITopic } from '../../../core/interfaces/topics/entities'
import { DBLService } from '../../../dbl'

@Injectable()
export class TopicsService implements ITopicsService {
  constructor(private readonly dbl: DBLService) {}

  async create(dto: ITopicCreate): Promise<ITopic> {
    const availableTopic = await this.dbl.topicsRepository.findOne({name: dto.name})
    if(availableTopic) return availableTopic

    const topic = await this.dbl.topicsRepository.create({ ...dto })
    return await topic.save()
  }

  async getAll(): Promise<ITopic[]> {
    return await this.dbl.topicsRepository
      .createQueryBuilder('topic')
      .leftJoinAndSelect('topic.questions', 'question')
      .getMany()
  }

  async getOne(id: string): Promise<ITopic> {
    return await this.dbl.topicsRepository.findOneOrError({ id })
  }

  async getByName(name: string): Promise<ITopic> {
    let topic = await this.dbl.topicsRepository.findOne({ name })
    if (!topic) {
      const newTopic = await this.dbl.topicsRepository.create({ name })
      topic = await newTopic.save()
    }
    return topic
  }
}
