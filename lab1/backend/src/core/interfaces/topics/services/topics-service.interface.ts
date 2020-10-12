import { ITopicCreate } from '../dtos';
import { ITopic } from '../entities';

export interface ITopicsService {
  create(dto: ITopicCreate): Promise<ITopic>
  getOne(id: string): Promise<ITopic>
  getByName(name: string): Promise<ITopic>
  getAll(): Promise<ITopic[]>
}
