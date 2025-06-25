// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/sign-in'); // e.g., /auth or /dashboard
}
