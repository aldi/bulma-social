export default function Footer() {
  return (
    <div className="footer has-text-centered">
      <p>
        Developed with{' '}
        <i
          className="fa-solid fa-heart fa-fw heart-icon"
        ></i>{' '}
        by{' '}
        <a href="https://aldi.st" target="_blank" rel="noopener noreferrer">
          Aldi Duzha
        </a>
      </p>
      <p>
        The source code is licensed under{' '}
        <a href="https://opensource.org/licenses/mit-license.php" target="_blank" rel="noopener noreferrer">MIT</a>.
      </p>
      <p>
        Available in{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/aldi/bulma-social">
          <i className="fa-brands fa-github"></i>
        </a>{' '}
        and{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/bulma-social">
          <i className="fa-brands fa-npm"></i>
        </a>
      </p>
      <p>
        <a
          target="_blank"
          href="https://github.com/aldi/bulma-social/blob/master/CHANGELOG.md"
        >
          View Changelog
        </a>
      </p>
    </div>
  );
}
