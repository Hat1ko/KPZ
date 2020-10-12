import { IQuestion } from '../../../core/interfaces/questions/entities'
import { TopicDto } from '../../topics/dtos/topic.dto';

export class QuestionDto implements IQuestion {
  id: string
  question: string
  hours: number
  dollarsPerHour: number
  topicId: string
  topic?: TopicDto
}
