import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { TOPICS_SERVICE } from '../../../core/providers/providers.const'
import { ITopicsService } from '../../../core/interfaces/topics/services'
import { TopicCreateDto, TopicDto } from '../dtos'

@Controller('topics')
export class TopicsController {
  constructor(
    @Inject(TOPICS_SERVICE)
    private readonly topicsService: ITopicsService,
  ) {}

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<TopicDto> {
    return (await this.topicsService.getOne(id)) as TopicDto
  }

  @Get()
  async getAll(): Promise<TopicDto[]> {
    return (await this.topicsService.getAll()) as TopicDto[]
  }

  @Post()
  async create(@Body() dto: TopicCreateDto): Promise<TopicDto> {
    return (await this.topicsService.create(dto)) as TopicDto
  }
}
