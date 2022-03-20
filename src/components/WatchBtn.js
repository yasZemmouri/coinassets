const Watchbtn = (props) => {
    console.log('isActive: ' + props.isActive);
    return (
        <button aria-label="add to watchlist" aria-selected="true">
            <svg hight="23" width="24" viewBox="0 0 24 23" filled="1" fill="none" focusable="false" aria-hidden='true' >
                <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z" >
                </path>
            </svg>
        </button>
    );
}

export default Watchbtn;
