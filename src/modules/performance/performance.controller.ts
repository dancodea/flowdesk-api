import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { HR_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  AddCheckinDto,
  CreateCycleDto,
  CreateGoalDto,
  GiveFeedbackDto,
  ListCyclesDto,
  ListGoalsDto,
  ListReviewsDto,
  ManagerSubmitDto,
  SelfSubmitDto,
  UpdateCycleDto,
  UpdateGoalDto,
} from './dto';
import { PerformanceService } from './performance.service';

@ApiTags('performance')
@ApiBearerAuth()
@Controller('performance')
export class PerformanceController {
  constructor(private readonly performance: PerformanceService) {}

  // ── Cycles ────────────────────────────────────────────────────────────────────

  @Post('cycles')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create a performance cycle (draft)' })
  createCycle(@CurrentUser() user: AuthUser, @Body() dto: CreateCycleDto) {
    return this.performance.createCycle(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Get('cycles')
  @ApiOperation({ summary: 'List performance cycles' })
  listCycles(@CurrentUser() user: AuthUser, @Query() dto: ListCyclesDto) {
    return this.performance.listCycles(user.organizationId, dto);
  }

  @Get('cycles/:id')
  @ApiOperation({ summary: 'Get a performance cycle' })
  getCycle(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.performance.getCycle(user.organizationId, id);
  }

  @Patch('cycles/:id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update a draft cycle' })
  updateCycle(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateCycleDto,
  ) {
    return this.performance.updateCycle(user.organizationId, id, dto);
  }

  @Post('cycles/:id/launch')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Launch a cycle — creates review records for all employees' })
  launchCycle(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.performance.launchCycle(user.organizationId, id, user.id, user.email, user.role);
  }

  @Post('cycles/:id/close')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Close a cycle — archives incomplete reviews' })
  closeCycle(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.performance.closeCycle(user.organizationId, id, user.id, user.email, user.role);
  }

  // ── Reviews ───────────────────────────────────────────────────────────────────

  @Get('cycles/:cycleId/reviews')
  @ApiOperation({ summary: 'List reviews in a cycle (own for employees, all for HR)' })
  listReviews(
    @CurrentUser() user: AuthUser,
    @Param('cycleId') cycleId: string,
    @Query() dto: ListReviewsDto,
  ) {
    return this.performance.listReviews(user.organizationId, cycleId, user.id, user.role, dto);
  }

  @Get('reviews/:id')
  @ApiOperation({ summary: 'Get a single review' })
  getReview(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.performance.getReview(user.organizationId, id);
  }

  @Post('reviews/:id/self-submit')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit self-review' })
  selfSubmit(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: SelfSubmitDto,
  ) {
    return this.performance.selfSubmit(user.organizationId, id, user.id, dto);
  }

  @Post('reviews/:id/manager-submit')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit manager review with rating' })
  managerSubmit(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: ManagerSubmitDto,
  ) {
    return this.performance.managerSubmit(user.organizationId, id, dto);
  }

  @Post('reviews/:id/acknowledge')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Employee acknowledges completed review' })
  acknowledge(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.performance.acknowledge(user.organizationId, id, user.id);
  }

  // ── Goals ─────────────────────────────────────────────────────────────────────

  @Post('goals')
  @ApiOperation({ summary: 'Create a goal' })
  createGoal(@CurrentUser() user: AuthUser, @Body() dto: CreateGoalDto) {
    return this.performance.createGoal(user.organizationId, user.id, dto);
  }

  @Get('goals')
  @ApiOperation({ summary: 'List goals (own or all for HR)' })
  listGoals(@CurrentUser() user: AuthUser, @Query() dto: ListGoalsDto) {
    return this.performance.listGoals(user.organizationId, user.id, user.role, dto);
  }

  @Get('goals/:id')
  @ApiOperation({ summary: 'Get a goal with check-ins' })
  getGoal(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.performance.getGoal(user.organizationId, id);
  }

  @Patch('goals/:id')
  @ApiOperation({ summary: 'Update a goal' })
  updateGoal(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateGoalDto,
  ) {
    return this.performance.updateGoal(user.organizationId, id, user.id, dto);
  }

  @Delete('goals/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete own goal' })
  deleteGoal(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.performance.deleteGoal(user.organizationId, id, user.id);
  }

  @Post('goals/:id/checkins')
  @ApiOperation({ summary: 'Add a progress check-in to a goal' })
  addCheckin(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: AddCheckinDto,
  ) {
    return this.performance.addCheckin(user.organizationId, id, user.id, dto);
  }

  @Get('goals/:id/checkins')
  @ApiOperation({ summary: 'List check-ins for a goal' })
  listCheckins(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.performance.listCheckins(user.organizationId, id);
  }

  // ── Continuous Feedback ───────────────────────────────────────────────────────

  @Post('feedback')
  @ApiOperation({ summary: 'Give continuous feedback to a colleague' })
  giveFeedback(@CurrentUser() user: AuthUser, @Body() dto: GiveFeedbackDto) {
    return this.performance.giveFeedback(user.organizationId, user.id, dto);
  }

  @Get('feedback/received')
  @ApiOperation({ summary: 'Feedback I have received' })
  receivedFeedback(@CurrentUser() user: AuthUser) {
    return this.performance.receivedFeedback(user.organizationId, user.id);
  }

  @Get('feedback/given')
  @ApiOperation({ summary: 'Feedback I have given' })
  givenFeedback(@CurrentUser() user: AuthUser) {
    return this.performance.givenFeedback(user.organizationId, user.id);
  }
}
