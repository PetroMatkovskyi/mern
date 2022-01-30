export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>
        Your new link:{' '}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>{' '}
      <p>
        Your old link:{' '}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Count clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Date creation: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};
