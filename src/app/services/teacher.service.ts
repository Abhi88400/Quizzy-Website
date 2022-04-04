import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private quizid: any;
  private delete:any;
  public avail: boolean = false;
  public msg: string = "";
  private baseUri: string = "http://localhost:3000/teacher/";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  createQuiz(body: any) {
    return this.http.post(this.baseUri + "createquiz", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getuploadquiz() {
    return this.http.get(this.baseUri + "getuploadquiz", { headers: this.headers });
  }

  gethomequiz() {
    return this.http.get(this.baseUri + "gethomequiz", { headers: this.headers });
  }

  seestudent() {
    return this.http.get(this.baseUri + "seestudent", { headers: this.headers });
  }


  blockuser(id : any) {
    return this.http.delete(this.baseUri + "blockuser/" + id, { headers: this.headers });
  }
  unblockuser(id : any) {
    return this.http.delete(this.baseUri + "unblockuser/" + id, { headers: this.headers });
  }
  

  setQuizId(id : any) {
    console.log(id)
    this.quizid = id;
  }

  getQuizId() {
    return this.quizid;  
  }

  deletequiz(id : any) {
    return this.http.delete(this.baseUri + "deletequiz/" + id, { headers: this.headers });
  }

  uploadquiz(body : any) {
    return this.http.post(this.baseUri + "uploadquiz", { id: body }, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  addQuestion(body : any) {
    return this.http.post(this.baseUri + "addquestion", body, {
      observe: 'body', 
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }  

  getAllQuestion(id : any) {
    return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
  }

  deleteQuestion(id : any) {
    return this.http.delete(this.baseUri + "deletequestion/" + id, { headers: this.headers });
  }

  setDelete(data : any) {
    this.delete = data;
  }

  getDelete() {
    return this.delete;
  }

}