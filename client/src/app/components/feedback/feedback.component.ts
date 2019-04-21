import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  messageClass;
  message;
  newPost=false;
  loading=false;
  constructor() { }
   

  newForm() {
    this.newPost = true; // Show new form
  }

   reload() {
    this.loading = true; // Used to lock button
    // Get All Blogs
    setTimeout(() => {
      this.loading= false; // Release button lock after four seconds
    }, 4000);
  }

  ngOnInit() {
  }

}
