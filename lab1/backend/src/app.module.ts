import { Module } from '@nestjs/common';
import { ApplicationModules } from './app.modules';

@Module({
  imports: [...ApplicationModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
