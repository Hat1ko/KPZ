import { IQuestion } from '../../questions/entities';

export interface ITopic {
  id: string
  name: string
  description?: string
  questions?: IQuestion[]
}
