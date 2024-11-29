import QueryInterface from '@/components/QueryInterface';
import { GradientBackground } from '@/components/GradientBackground';

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <GradientBackground />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <QueryInterface />
      </div>
    </main>
  );
}