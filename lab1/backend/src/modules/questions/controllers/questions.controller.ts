import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { QUESTIONS_SERVICE } from '../../../core/providers/providers.const';
import { IQuestionsService } from '../../../core/interfaces/questions/services';
import { QuestionCreateDto, QuestionDto } from '../dtos';

@Controller('questions')
export class QuestionsController {
  constructor(
    @Inject(QUESTIONS_SERVICE)
    private readonly questionsService: IQuestionsService,
  ) {
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<QuestionDto> {
    return await this.questionsService.getOne(id) as QuestionDto
  }

  @Get()
  async getAll(): Promise<QuestionDto[]> {
    return await this.questionsService.getAll() as QuestionDto[]
  }

  @Post()
  async create(dto: QuestionCreateDto): Promise<QuestionDto> {
    return await this.questionsService.create(dto) as QuestionDto
  }

}
