import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { UsersModule } from './../users/users.module';

/**
 * Configuration for Swagger
 *
 * @export
 * @param {INestApplication} app
 */
export function swaggerConfig(app: INestApplication) {
    // Swagger configuration
    const options = new DocumentBuilder()
        .setTitle('API')
        .setVersion('0.0.1')
        // Register all controller tags heres
        .addTag('users', 'Users endpoint')
        .build();

    // Custom swagger options
    const customOptions: SwaggerCustomOptions = {
        customSiteTitle: `API Documentation`,
    };

    const document = SwaggerModule.createDocument(app, options, {
        // Include only specified modules
        include: [UsersModule],
    });
    // Setup swagger endpoint
    SwaggerModule.setup('apidoc', app, document, customOptions);
}
