import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/about"!
      <Link to="/">Home</Link>
    </div>
  );
}
