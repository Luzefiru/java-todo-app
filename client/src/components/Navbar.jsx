import AddModal from './AddModal';

function Navbar() {
  return (
    <div className="justify-between px-8 navbar">
      <a className="text-xl btn btn-ghost">Todo_It</a>
      <div className="navbar-end">
        <AddModal />
      </div>
    </div>
  );
}

export default Navbar;
