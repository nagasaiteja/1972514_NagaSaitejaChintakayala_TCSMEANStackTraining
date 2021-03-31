import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  name : any = "";
  
  result : any;
  timedone : any;

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
   this.name = localStorage.getItem('participant').split(" ")[0];
  // this.name = "nikhil"
  console.log(this.name);
   this.timedone =  localStorage.getItem('seconds');
  // this.timedone = 60;
  console.log(this.timedone);
    if (parseInt(localStorage.getItem('qnProgress')) == 10) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

     /// this.quizService.getAnswers().subscribe(
       // (data: any) => {
          this.quizService.correctAnswerCount = 0;
         //// // this.quizService.qns.forEach((e, i) => {
          //  if (e.answer == data[i])
            //  this.quizService.correctAnswerCount++;
           // e.correct = data[i];
          //});
       // }
     // );
    var ans = [2,3,3,2,3,3,2,3,3,2]
     var userans = JSON.parse(localStorage.getItem("qns"));
     console.log(userans);
     console.log(ans);
     for(var i=0; i<10;i++){
     console.log(userans[i].answer);
     console.log(ans[i]);
       if(userans[i].answer == ans[i]){
         this.quizService.correctAnswerCount++;
       }
       else{
         console.log("wrong answer"+ans[i]);
       }
     }
     if(this.quizService.correctAnswerCount>5){
       this.result = "Pass";
     }
     else{
       this.result= "fail";
     }
    }
    else
      this.router.navigate(['/quiz']);
  }


  OnSubmit() {
    this.quizService.submitScore().subscribe(() => {
      this.restart();
    });
  }

  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }

}
