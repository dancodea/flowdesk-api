import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { HR_ROLES, ORG_ADMIN_ONLY } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';

@ApiTags('departments')
@ApiBearerAuth()
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departments: DepartmentsService) {}

  @Get()
  @ApiOperation({ summary: 'List departments (flat or nested tree)' })
  @ApiQuery({ name: 'tree', required: false, type: Boolean })
  list(
    @CurrentUser() user: AuthUser,
    @Query('tree', new ParseBoolPipe({ optional: true })) tree?: boolean,
  ) {
    return this.departments.list(user.organizationId, tree ?? false);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Department detail with members' })
  findOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.departments.findOne(user.organizationId, id);
  }

  @Post()
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create a department' })
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateDepartmentDto) {
    return this.departments.create(user.organizationId, dto);
  }

  @Patch(':id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update a department' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateDepartmentDto,
  ) {
    return this.departments.update(user.organizationId, id, dto);
  }

  @Delete(':id')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Delete an empty department' })
  remove(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.departments.remove(user.organizationId, id);
  }
}
