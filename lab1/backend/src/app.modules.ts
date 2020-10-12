import {DBLModule, TypeOrmModuleProvider} from "./dbl";
import { TopicsModule } from './modules/topics/topics.module';
import { QuestionsModule } from './modules/questions';

export const ApplicationModules = [
  DBLModule.imports([TypeOrmModuleProvider]),
  TopicsModule,
  QuestionsModule,
]
