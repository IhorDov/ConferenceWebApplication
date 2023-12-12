import DropdownBtn from '../../Pictures/dropdownbtn.png';

function ConferenceButton() {
    return (
        <>
            <button className="dropbtn">
                Vælg konference{' '}
                <img src={DropdownBtn} alt="" style={{ width: '3%' }}></img>
            </button>
        </>
    );
}

export default ConferenceButton;
