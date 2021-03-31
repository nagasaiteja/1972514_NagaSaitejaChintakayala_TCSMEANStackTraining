import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('seconds')) > 0) {
    debugger;
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
      if (this.quizService.qnProgress == 10)
        this.router.navigate(['/result']);
      else
        this.startTimer();
    }
    else {
    debugger;
      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
       
         this.quizService.qns = [{"Qnid" : 1,"Qn" : "who won 2011 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"], "correct" : "true"},
        {"Qnid" : 2,"Qn" : "who won 2007 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]},
        {"Qnid" : 3,"Qn" : "who won 2015 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]},
        {"Qnid" : 4,"Qn" : "who won 2011 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]},
        {"Qnid" : 5,"Qn" : "who won 2007 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]},
        {"Qnid" : 6,"Qn" : "who won 2015 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]},
        {"Qnid" : 7,"Qn" : "who won 2011 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]},
        {"Qnid" : 8,"Qn" : "who won 2007 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]},
        {"Qnid" : 9,"Qn" : "who won 2015 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]},
        {"Qnid" : 10,"Qn" : "who won 2011 world cup" , "Options" : ["RSA","INDIA","AUs", "NZ"]}];

          console.log(this.quizService.qns);
          this.startTimer();
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

  Answer(qID, choice) {
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == 10) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

}
