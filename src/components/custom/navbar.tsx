import { Link } from '@tanstack/react-router'

function Navbar() {
  return (
    <div className="flex gap-2 p-4">
      {/* TypeScript will error if you type "/contuer" instead of "/counter" */}
      <Link to="/" className="[&.active]:font-bold">Dashboard</Link>
      <Link to="/counter" className="[&.active]:font-bold">Metrics</Link>
    </div>
  )
}
export default Navbar