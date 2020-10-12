import { EntityRepository } from 'typeorm/index'
import { ExtendedRepository } from '../../extended.repository'
import { Question } from '../entities'
import { IQuestionsRepository } from '../../../core/interfaces/questions/repositories'

@EntityRepository(Question)
export class QuestionRepository extends ExtendedRepository<Question>
  implements IQuestionsRepository {}
