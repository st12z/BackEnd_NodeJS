export class ResponseData{
  status: number;
  message: string;
  data: any;
  constructor( status: number, message: string,data: any){
      this.status = status;
      this.message = message;
      this.data = data;
      
      
  }
}