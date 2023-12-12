import DropdownBtn from '../../Pictures/dropdownbtn.png';

function ActivityButton() {
    return (
        <>
            <button className="dropbtn">
                Vælg aktivity{' '}
                <img src={DropdownBtn} alt="" style={{ width: '3%' }}></img>
            </button>
        </>
    );
}

export default ActivityButton;
