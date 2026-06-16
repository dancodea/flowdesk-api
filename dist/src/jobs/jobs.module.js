"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsModule = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const payroll_processor_1 = require("./payroll.processor");
const email_processor_1 = require("./email.processor");
const push_processor_1 = require("./push.processor");
const reports_processor_1 = require("./reports.processor");
let JobsModule = class JobsModule {
};
exports.JobsModule = JobsModule;
exports.JobsModule = JobsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bullmq_1.BullModule.registerQueue({ name: payroll_processor_1.PAYROLL_QUEUE }, { name: email_processor_1.EMAIL_QUEUE }, { name: push_processor_1.PUSH_QUEUE }, { name: reports_processor_1.REPORTS_QUEUE }),
        ],
        providers: [
            payroll_processor_1.PayrollProcessor,
            email_processor_1.EmailProcessor,
            push_processor_1.PushProcessor,
            reports_processor_1.ReportsProcessor,
        ],
        exports: [bullmq_1.BullModule],
    })
], JobsModule);
//# sourceMappingURL=jobs.module.js.map