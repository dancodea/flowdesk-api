"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const app_module_1 = require("./app.module");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    app.use((0, compression_1.default)());
    app.setGlobalPrefix('api');
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: process.env.API_VERSION?.replace('v', '') ?? '1',
    });
    app.enableCors({
        origin: process.env.CLIENT_URL ?? 'http://localhost:3000',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter());
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(), new transform_interceptor_1.TransformInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('FlowDesk API')
        .setDescription('Multi-tenant HR & Payroll SaaS API')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT ?? 4000;
    await app.listen(port);
    console.log(`FlowDesk API running on http://localhost:${port}/api`);
}
void bootstrap();
//# sourceMappingURL=main.js.map