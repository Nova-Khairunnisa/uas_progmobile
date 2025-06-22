// app/admin/layout.js
export default function AdminLayout({ children }) {
  return (
    <section className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      {children}
    </section>
  );
}
