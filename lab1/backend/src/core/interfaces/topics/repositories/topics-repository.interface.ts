import { ExtendedRepository } from '../../../../dbl';
import { Topic } from '../../../../dbl/topics/entities/topic.entity';

export interface ITopicsRepository extends ExtendedRepository<Topic> {
}
