export const ButtonGroup = (props) => {
  const { pageName, HandleClick } = props;
  return (
    <div className="flex items-center justify-between mb-7 flex-wrap">
      <h2 className="section-title m-2">{pageName}</h2>
      <div
        id="filterBtns"
        className="flex items-center space-x-3 m-2 whitespace-nowrap overflow-x-auto scrollbar-none"
      >
        <button
          id="all"
          onClick={HandleClick}
          className="text-primary-gray text-sm font-medium rounded-full px-3 py-1.5 active"
        >
          <span>ALL</span>
        </button>
        <button
          id="sport"
          onClick={HandleClick}
          className="text-primary-gray text-sm font-medium rounded-full px-3 py-1.5"
        >
          <span>Sport</span>
        </button>
        <button
          id="concert"
          onClick={HandleClick}
          className="text-primary-gray text-sm font-medium rounded-full px-3 py-1.5"
        >
          <span>Concert</span>
        </button>
        <button
          id="theatre"
          onClick={HandleClick}
          className="text-primary-gray text-sm font-medium rounded-full px-3 py-1.5"
        >
          <span>Theatre</span>
        </button>
      </div>
    </div>
  );
};
