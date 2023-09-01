import { Component } from '@angular/core';

@Component({
  selector: 'app-dual-listbox',
  templateUrl: './dual-listbox.component.html',
  styleUrls: ['./dual-listbox.component.css']
})
export class DualListboxComponent {

  course:string="";
  courseList:string[]=[];
  courseList2:string[]=[];
  courseItem!:string;
  courseIndex!:number;
  courseItem2!: string;
  courseIndex2!: number;
  isMode:boolean=false;

 constructor(){
 }

 changeMode(){
  this.isMode=!this.isMode;
 }
 addCourse(){
  if(this.course.length>0){
    this.courseList.push(this.course);
    this.course="";
  }
 }

 selectCourse(item:string,index:number){
    this.courseItem=item;
    this.courseIndex=index;
 }

 selectCourse2(item:string,index:number){
  this.courseItem2=item;
  this.courseIndex2=index;
 }
 

 courseRight(){
  this.courseList.splice(this.courseIndex,1);
  this.courseList2.push(this.courseItem);
 }

 courseLeft(){
  this.courseList2.splice(this.courseIndex2,1);
  this.courseList.push(this.courseItem2);
 }
}
