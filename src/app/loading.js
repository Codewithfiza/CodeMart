// Server component — pure CSS animation, no hooks, no "use client" needed.
// If you're using this as Next.js's automatic loading.jsx, drop it in
// app/loading.jsx as-is (must be a default export, which it is).

export default function Loader() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#F5F1EC] overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo */}
        <p className="text-3xl font-bold tracking-tight text-primary">
          Code<span className="text-accent">Mart</span>
        </p>

        {/* Spinner */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-primary/15" />
          <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin" />
        </div>

        {/* Bouncing dots */}
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 rounded-full bg-secondary animate-bounce" />
        </div>

        <p className="text-sm text-primary/60">Loading your experience...</p>
      </div>
    </div>
  );
}