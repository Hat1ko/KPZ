import { QUESTIONS_REPOSITORY } from '../../../core/providers/providers.const'
import { Connection } from 'typeorm/index'
import { QuestionRepository } from '../repositories'

export const QuestionsRepositoryProvider = {
  provide: QUESTIONS_REPOSITORY,
  useFactory: (connection: Connection) => connection.getCustomRepository(QuestionRepository),
  inject: [Connection],
}
