import { Controller, Get, HttpStatus, Render, Req, UseGuards } from "@nestjs/common"
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from "express";

@Controller('/')
export class AppController {
   constructor(private readonly appService: AppService) {
   }

   @Get('/')
   @Render('index')
   root() {
   }

   @Get('/google')
   @UseGuards(AuthGuard('google'))
   async googleAuth(@Req() req) {
   }

   @Get('/google/redirect')
   @UseGuards(AuthGuard('google'))
   @Render('redirect')
   googleAuthRedirect(@Req() req) {
      return this.appService.googleLogin(req)
   }

   @Get("/facebook")
   @UseGuards(AuthGuard("facebook"))
   async facebookLogin(): Promise<any> {
      return HttpStatus.OK;
   }

   @Get("/facebook/redirect")
   @UseGuards(AuthGuard("facebook"))
   async facebookLoginRedirect(@Req() req: Request): Promise<any> {
      return {
         statusCode: HttpStatus.OK,
         data: req.user,
      };
   }
}