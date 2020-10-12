import { TOPICS_SERVICE } from '../../../core/providers/providers.const';
import { TopicsService } from '../services/topics.service';

export const TopicsServiceProvider = {
  provide: TOPICS_SERVICE,
  useClass: TopicsService,
}
