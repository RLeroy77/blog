import { Component } from '@angular/core';
import {NavbarComponent} from '../../layouts/navbar/navbar.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../../core/services/post.service';
import {CommentService} from '../../core/services/comment.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
    NavbarComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    commentBody: new FormControl('', [Validators.required])
  });

  submit: boolean = false;
  responseMessage: string = '';

  constructor(private postService: PostService,
              private commentService: CommentService
  ) { }

  get title() {
    return this.form.get('title') as FormControl;
  }

  get body() {
    return this.form.get('body') as FormControl;
  }

  get commentBody() {
    return this.form.get('commentBody') as FormControl;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.submit = true;
      return;
    }

    const postData= {
      title:this.title.value,
      body:this.body.value,
      userId: 666,
    };

    this.postService.createPost(postData).subscribe((postResponse) => {
      console.log('Post créé : ', postResponse);

      const commentData = {
        postId: postResponse.id,
        name: 'Anonymous',
        email: 'anonymous@exemple.com',
        body: this.commentBody.value,
      };

      this.commentService.createComment(commentData).subscribe((commentResponse) => {
        console.log('Commentaire créé : ', commentResponse);
        this.responseMessage = 'Post et commentaire créés avec succès.';
        this.form.reset();
      })
    })
  }
}
