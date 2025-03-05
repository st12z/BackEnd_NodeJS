export class PageResponse{
  pageNo:Number;
  pageSize:Number;
  total:Number;
  dataRes:any;
  constructor(pageNo:Number,pageSize:Number,total:Number,dataRes:any){
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.total = total;
      this.dataRes = dataRes;
  }
}