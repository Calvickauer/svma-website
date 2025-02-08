'use client';

import { SignIn } from '@clerk/nextjs';

export default function Login() {
  return (
    <div>
      <h1>Sign In</h1>
      <SignIn /> {/* Clerk's built-in sign-in form */}
    </div>
  );
}
