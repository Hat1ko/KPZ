import { TopicsRepository } from '../repositories'
import { TOPICS_REPOSITORY } from '../../../core/providers/providers.const'
import { Connection } from 'typeorm/index'

export const TopicsRepositoryProvider = {
  provide: TOPICS_REPOSITORY,
  useFactory: (connection: Connection) => connection.getCustomRepository(TopicsRepository),
  inject: [Connection]
}
