"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ReportsProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsProcessor = exports.REPORTS_QUEUE = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
exports.REPORTS_QUEUE = 'reports';
let ReportsProcessor = ReportsProcessor_1 = class ReportsProcessor extends bullmq_1.WorkerHost {
    logger = new common_1.Logger(ReportsProcessor_1.name);
    process(job) {
        this.logger.log(`Processing reports job ${job.name} (${job.id})`);
        return Promise.resolve();
    }
};
exports.ReportsProcessor = ReportsProcessor;
exports.ReportsProcessor = ReportsProcessor = ReportsProcessor_1 = __decorate([
    (0, bullmq_1.Processor)(exports.REPORTS_QUEUE)
], ReportsProcessor);
//# sourceMappingURL=reports.processor.js.map