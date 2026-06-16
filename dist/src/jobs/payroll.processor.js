"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PayrollProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollProcessor = exports.PAYROLL_QUEUE = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
exports.PAYROLL_QUEUE = 'payroll';
let PayrollProcessor = PayrollProcessor_1 = class PayrollProcessor extends bullmq_1.WorkerHost {
    logger = new common_1.Logger(PayrollProcessor_1.name);
    process(job) {
        this.logger.log(`Processing payroll job ${job.name} (${job.id})`);
        return Promise.resolve();
    }
};
exports.PayrollProcessor = PayrollProcessor;
exports.PayrollProcessor = PayrollProcessor = PayrollProcessor_1 = __decorate([
    (0, bullmq_1.Processor)(exports.PAYROLL_QUEUE)
], PayrollProcessor);
//# sourceMappingURL=payroll.processor.js.map