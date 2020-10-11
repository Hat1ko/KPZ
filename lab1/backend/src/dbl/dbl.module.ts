import { Global } from '@nestjs/common'
import { CustomDynamicModule, CustomModule } from '../shared/helpers/customModule'
import { DBLService } from './dbl.service'
import { TopicsRepositoryProvider } from './topics/providers';
import { ConfigModule } from '../shared/config';

@Global()
@CustomModule({
  imports: [ConfigModule],
  public: [
    DBLService,

    TopicsRepositoryProvider,
  ],
})
export class DBLModule extends CustomDynamicModule {}
