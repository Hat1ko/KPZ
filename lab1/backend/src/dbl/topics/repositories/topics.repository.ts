import { ITopicsRepository } from '../../../core/interfaces'
import { ExtendedRepository } from '../../extended.repository';
import { Topic } from '../entities';
import { EntityRepository } from 'typeorm/index';

@EntityRepository(Topic)
export class TopicsRepository extends ExtendedRepository<Topic> implements ITopicsRepository {}
