// import {
//   HttpTestingController,
//   HttpClientTestingModule,
// } from '@angular/common/http/testing';

// import { TestBed, inject } from '@angular/core/testing';
// import { IData } from '../register/data';

// import { ApiService } from './api.service';

// describe('ApiService', () => {
//   let apiservice: ApiService;
//   let httpMock: HttpTestingController;
//   let baseUrl = 'http://localhost:3000/students';
//   let data:any;
//   let resultmock:any;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });

//     httpMock = TestBed.get(HttpTestingController);
//     resultmock = {
//       sname: 'test',
//       sroll: 'test',
//       dpt: 'test',
//       email: 'test',
//       phno: 'test',
//     };
//   });

//   beforeEach(inject(
//     [ApiService],
//     (service: ApiService) => {
//       apiservice = service;
//     }
//   ));

//   it("should return data", () => {
//     data = {
//       sname: 'test',
//       sroll: 'test',
//       dpt: 'test',
//       email: 'test',
//       phno: 'test',
//     };
//     let result: any;
//     result = apiservice.getData()
//     const req = httpMock.expectOne({
//       method: "GET",
//       url: baseUrl
//     });
   
//     req.flush([data]);
   
//     expect(resultmock).toEqual(data);
//   });

// });

