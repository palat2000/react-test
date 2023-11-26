function Header({ data }) {
  return (
    <div className="header">
      <div className="avatar">
        {data?.url && <img src={data?.url} alt="doggy" />}
      </div>
    </div>
  );
}

export default Header;
