import { CustomDynamicModule, CustomModule } from '../../shared/helpers/customModule';
import { QuestionsController } from './controllers';
import { QuestionsServiceProvider } from './providers';
import { TopicsModule } from '../topics/topics.module';

@CustomModule({
  imports: [TopicsModule],
  controllers: [QuestionsController],
  public: [QuestionsServiceProvider],
})
export class QuestionsModule extends CustomDynamicModule {

}
