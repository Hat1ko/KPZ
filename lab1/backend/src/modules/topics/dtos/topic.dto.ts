import { ITopic } from '../../../core/interfaces'
import { QuestionDto } from '../../questions/dtos/question.dto'

export class TopicDto implements ITopic {
  description: string
  id: string
  name: string
  questions: QuestionDto[]
}
