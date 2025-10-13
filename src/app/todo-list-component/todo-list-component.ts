import { CommonModule} from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.css'
})
export class TodoListComponent implements OnInit, OnDestroy {
  showError: boolean = false; 
  currentFilter: 'all' | 'active' | 'completed' = 'all';
  isLoading : boolean = true;
  // liste des taches
  tasks: any[] = [
   
  ];
  // nouvelle tache
  newTask: any ={ id : null, title : '', completed : false};
 
  // afficher la liste des taches depuis le local storage
  ngOnInit(): void {
    setTimeout(() => {
      this.tasksLoading();  
      this.isLoading = false;
    }, 2000);
    
    console.log('loading tasks on init ...');
  }

  private tasksLoading(): void {
  
    const localStorage_tasks = localStorage.getItem('tasks_from_tp2');
    if (localStorage_tasks) {
      this.tasks = JSON.parse(localStorage_tasks);
      console.log('Tasks loaded from localStorage:', this.tasks);
    } else {
      console.log('No tasks found in localStorage');
    }
    this.isLoading = false;
}


  //getters
  get uncompletedTasksCount():number{
    return this.tasks.filter(task => !task.completed).length;
  }
  get completedTasksCount():number{
    return this.tasks.filter(task => task.completed).length;
  }
  //filtrer les taches
  get filterTasks(): any[] {
    if (this.currentFilter === 'active') {
      return this.tasks.filter(task => !task.completed);
    } else if (this.currentFilter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else {
      return this.tasks;
    }
  }

  // ajouter une tache
  addTask(form: NgForm): void {
  let id: number = this.tasks.length + 1;
  const { title, completed } = this.newTask;
  const cleanTitle = title ? title.trim() : '';

  if (!cleanTitle || cleanTitle.length > 20) {
    this.showError = true;
     // cacher le message après 2 secondes
    setTimeout(() => {
      this.showError = false;
    }, 2000);

    return;
  }
  this.showError = false;
   // cache l'erreur si tout est OK
  this.tasks.push({ id, title:cleanTitle, completed });
  this.saveTasks();
  console.log('saving tasks after adding ...');
  form.resetForm();
}

  // supprimer une tache
  deleteTask(index : any): void {
    this.tasks = this.tasks.filter((task , i) => i !== index);
    this.saveTasks();
    console.log("saving tasks after deleting ...");
  }
  // supprimer toutes les taches completes
  clearCompletedTasks(): void {
    this.tasks = this.tasks.filter(task => !task.completed);
    this.saveTasks();
    console.log("saving tasks after clearing completed ...");
  }
  // marquer une tache comme complete/incomplete
  toggleCompleted(index : any): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    console.log("etat de la tache ",this.tasks[index].completed);
    this.saveTasks();
    console.log("saving tasks after toggling status ...");
  }


  // nettoyer les ressources
  ngOnDestroy(): void {
      this.saveTasks();
      console.log('saving tasks before destroying ...');
  }


  // sauvegarder la liste des taches dans le local storage
  private saveTasks(): void {
  
    localStorage.setItem('tasks_from_tp2', JSON.stringify(this.tasks));
    console.log('Tasks saved to localStorage:', this.tasks);
}
}
