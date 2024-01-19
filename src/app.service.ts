import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    /**
     * [getHello description]
     * @return {string} [description]
     */
    getHello(): string {
        return 'Hello World!';
    }
}
