import { IQuestion } from '../entities';
import { IQuestionCreate } from '../dtos';

export interface IQuestionsService {
  create(dto: IQuestionCreate): Promise<IQuestion>
  getOne(id: string): Promise<IQuestion>
  getAll(): Promise<IQuestion[]>
}
