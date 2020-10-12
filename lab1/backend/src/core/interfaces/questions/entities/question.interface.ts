import { ITopic } from '../../topics/entities';

export interface IQuestion {
  id: string
  question: string
  hours: number
  dollarsPerHour: number
  topicId: string
  topic?: ITopic
}
