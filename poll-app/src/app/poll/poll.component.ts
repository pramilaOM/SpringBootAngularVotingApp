import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll.models';
import { PollService } from '../poll.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'

})
export class PollComponent implements OnInit {
  newPoll: Partial<Poll> & { options: { optionText: string; voteCount: number }[] } = {
  question: '',
  options: [
    { optionText: '', voteCount: 0 },
    { optionText: '', voteCount: 0 }
  ]
};



  polls: Poll[] = [];

  constructor(private pollService: PollService) {
  }

  ngOnInit(): void {
    this.loadPolls();
  }

addOption(){
    this.newPoll.options.push({optionText:'', voteCount: 0});
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (error) => {
        console.error("Error fetching polls: ", error);
      }
    });
  }

  

 

 resetPoll() {
  this.newPoll = {
    question: '',
    options: [
      { optionText: '', voteCount: 0 },
      { optionText: '', voteCount: 0 }
    ]
  };
}


  vote(pollId: number, optionIndex: number){
    this.pollService.vote(pollId,optionIndex).subscribe({
      next: () =>{
        const poll = this.polls.find(p=> p.id == pollId);
        if(poll){
          poll.options[optionIndex].voteCount++;
        }
      },
      error: (error) =>{
        console.error("Error voting on a poll: ",error);
      }
    });
  }

   createPoll() {
    this.pollService.createPoll(this.newPoll as Poll).subscribe({
      next: (createPoll) => {
        this.polls.push(createPoll);
        this.resetPoll();
      },
      error: (error) => {
        console.error("Error on creating poll: ", error);
      }
    });
  }


  trackByIndex(index: number): number {
    return index;
  }

}
