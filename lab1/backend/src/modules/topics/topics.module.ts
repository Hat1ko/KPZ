import { CustomDynamicModule, CustomModule } from '../../shared/helpers/customModule';
import { QuestionsModule } from '../questions';
import { TopicCreateDto } from './dtos';
import { TopicsServiceProvider } from './providers';
import { TopicsController } from './controllers';

@CustomModule({
  controllers: [TopicsController],
  public: [TopicsServiceProvider]
})
export class TopicsModule implements CustomDynamicModule {

}
