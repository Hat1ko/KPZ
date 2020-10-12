import { QUESTIONS_SERVICE } from '../../../core/providers/providers.const';
import { QuestionsService } from '../services/questions.service';

export const QuestionsServiceProvider = {
  provide: QUESTIONS_SERVICE,
  useClass: QuestionsService,
}
