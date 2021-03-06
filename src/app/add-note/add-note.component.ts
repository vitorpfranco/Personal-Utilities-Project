import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
note!:Note;
  constructor(private noteService: NoteService, private router: Router,private NotificationService: NotificationService) { }

  ngOnInit(): void {
  }

submittry:boolean = false;
onFormSubmit(form:NgForm):void{
if(form.invalid){
  this.submittry=true
  return}
this.note = new Note(form.value.title, form.value.content);
this.noteService.addNote(this.note)
this.submittry=false
this.router.navigateByUrl("/notes")
this.NotificationService.show("Nota adicionada!")
}
}

