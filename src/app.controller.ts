import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    /**
     * Constructor
     *
     * @param appService App service
     * @returns void
     */
    constructor(private readonly appService: AppService) {}

    /**
     * Get
     *
     * @returns string
     */
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
