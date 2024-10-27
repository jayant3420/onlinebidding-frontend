type WelcomeNameType = {
  name?: string;
};

function Welcome({ name }: WelcomeNameType) {
  return (
    <div className="explore-auctions">
      <span className="explore">{name ? 'Welcome': 'Explore'}</span>
      <span className="auctions">{name ? name : 'Auctions'}</span>
    </div>
  );
}

export default Welcome;
