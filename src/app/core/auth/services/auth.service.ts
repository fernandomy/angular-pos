import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { CredentialsI } from '../models/crendentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  register({ email, password }: CredentialsI) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: CredentialsI) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  currentUser() {
    return authState(this.auth);
  }
}
