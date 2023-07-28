import PropTypes from "prop-types";

export default function SearchBar({ query, onSetQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onSetQuery(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSetQuery: PropTypes.func.isRequired,
};