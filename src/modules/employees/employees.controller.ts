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
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import type { Response } from 'express';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import {
  HR_ROLES,
  MANAGER_ROLES,
  ORG_ADMIN_ONLY,
} from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  AddDocumentDto,
  CreateEmployeeDto,
  ListEmployeesDto,
  SelfUpdateDto,
  UpdateEmployeeDto,
} from './dto';
import { EmployeesService } from './employees.service';

@ApiTags('employees')
@ApiBearerAuth()
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employees: EmployeesService) {}

  // ── Static routes MUST come before /:id ──────────────────────────────────────

  @Get('me')
  @ApiOperation({ summary: 'Own employee record' })
  findMe(@CurrentUser() user: AuthUser) {
    return this.employees.findMe(user.id);
  }

  @Get('directory')
  @ApiOperation({ summary: 'Lightweight company directory (all employees)' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  directory(
    @CurrentUser() user: AuthUser,
    @Query('search') search?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.employees.directory(
      user.organizationId,
      search,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
  }

  @Get('org-chart')
  @ApiOperation({ summary: 'Org chart tree data' })
  orgChart(@CurrentUser() user: AuthUser) {
    return this.employees.orgChart(user.organizationId);
  }

  @Get('export')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Export employee list (CSV or Excel)' })
  @ApiQuery({ name: 'format', required: false, enum: ['csv', 'excel'] })
  async exportEmployees(
    @CurrentUser() user: AuthUser,
    @Query('format') format: 'csv' | 'excel' = 'csv',
    @Res() res: Response,
  ) {
    const result = await this.employees.export(user.organizationId, format);
    res.setHeader('Content-Type', result.mimeType);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${result.filename}"`,
    );
    res.end(result.buffer);
  }

  // ── CRUD ─────────────────────────────────────────────────────────────────────

  @Post()
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create a new employee' })
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateEmployeeDto) {
    return this.employees.create(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }

  @Get()
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'List employees with filters' })
  findAll(@CurrentUser() user: AuthUser, @Query() dto: ListEmployeesDto) {
    return this.employees.findAll(user.organizationId, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Full employee profile' })
  findOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.employees.findOne(
      user.organizationId,
      id,
      user.id,
      user.role,
    );
  }

  @Patch('me')
  @ApiOperation({ summary: 'Self-update personal info' })
  selfUpdate(@CurrentUser() user: AuthUser, @Body() dto: SelfUpdateDto) {
    return this.employees.selfUpdate(user.id, dto);
  }

  @Patch(':id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update employee record (HR)' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.employees.update(
      user.organizationId,
      id,
      dto,
      user.id,
      user.email,
      user.role,
    );
  }

  @Delete(':id')
  @Roles(...ORG_ADMIN_ONLY)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Soft-delete (terminate) employee' })
  remove(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.employees.remove(
      user.organizationId,
      id,
      user.id,
      user.email,
      user.role,
    );
  }

  @Post(':id/invite')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send / re-send portal invite email' })
  sendInvite(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.employees.sendInvite(user.organizationId, id, user.id);
  }

  @Patch(':id/activate')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Reactivate a terminated employee' })
  activate(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.employees.activate(user.organizationId, id);
  }

  @Post('bulk-import')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Bulk import employees from a CSV file' })
  bulkImport(
    @CurrentUser() user: AuthUser,
    @UploadedFile() file: { buffer: Buffer; originalname: string },
  ) {
    if (!file) throw new Error('No file uploaded');
    return this.employees.bulkImport(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      file.buffer,
    );
  }

  // ── Documents ─────────────────────────────────────────────────────────────────

  @Post(':id/documents')
  @ApiOperation({ summary: 'Add a document record to an employee' })
  addDocument(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: AddDocumentDto,
  ) {
    return this.employees.addDocument(
      user.organizationId,
      id,
      user.id,
      user.role,
      dto,
    );
  }

  @Get(':id/documents')
  @ApiOperation({ summary: 'List employee documents' })
  @ApiQuery({ name: 'type', required: false })
  listDocuments(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Query('type') type?: string,
  ) {
    return this.employees.listDocuments(
      user.organizationId,
      id,
      user.id,
      user.role,
      type,
    );
  }

  @Get(':id/documents/:docId/download')
  @ApiOperation({ summary: 'Get signed Cloudinary download URL for a document' })
  getDownloadUrl(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Param('docId') docId: string,
  ) {
    return this.employees.getDocumentDownloadUrl(
      user.organizationId,
      id,
      docId,
      user.id,
      user.role,
    );
  }

  @Delete(':id/documents/:docId')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a document (HR only)' })
  removeDocument(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Param('docId') docId: string,
  ) {
    return this.employees.removeDocument(
      user.organizationId,
      id,
      docId,
      user.id,
      user.role,
    );
  }

  @Patch(':id/documents/:docId/sign')
  @ApiOperation({ summary: 'E-sign a document (employee self-action)' })
  signDocument(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Param('docId') docId: string,
  ) {
    return this.employees.signDocument(user.id, id, docId);
  }
}
