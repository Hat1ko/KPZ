import { IQuestionCreate } from '../../../core/interfaces/questions/dtos'

export class QuestionCreateDto implements IQuestionCreate {
  dollarsPerHour: number
  hours: number
  question: string
  topicName: string
}
